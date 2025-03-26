import fs from "fs";
import path from "path";
const injectStylesImport = (customScssPath)=>{
    try {
        const dir = path.dirname(customScssPath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, {
                recursive: true
            });
        }
        const importStatement = '@import "@launchthat.apps/payload-shadcn/globals.css";';
        let content = "";
        if (fs.existsSync(customScssPath)) {
            content = fs.readFileSync(customScssPath, "utf-8");
            if (content.includes(importStatement)) {
                return;
            }
        }
        const newContent = `${importStatement}\n${content}`;
        fs.writeFileSync(customScssPath, newContent);
        console.log(`✨ Successfully injected shadcn styles import into ${customScssPath}`);
    } catch (error) {
        console.error(`Error injecting styles import: ${error}`);
    }
};
export const shadcnPlugin = (options = {})=>(incomingConfig)=>{
        const opts = {
            enabled: options.enabled ?? true,
            enableAll: options.enableAll ?? false,
            listView: {
                collections: options.listView?.collections ?? []
            },
            editView: {
                collections: options.editView?.collections ?? []
            },
            customCSS: options.customCSS ?? "",
            customScssPath: options.customScssPath ?? "app/(payload)/custom.scss",
            injectStyles: options.injectStyles ?? true
        };
        if (!opts.enabled) return incomingConfig;
        if (opts.injectStyles && opts.customScssPath) {
            injectStylesImport(opts.customScssPath);
        }
        const config = {
            ...incomingConfig,
            collections: [
                ...incomingConfig.collections || []
            ],
            admin: {
                ...incomingConfig.admin || {},
                components: {
                    ...incomingConfig.admin?.components || {}
                }
            }
        };
        if (config.collections && Array.isArray(config.collections)) {
            config.collections = config.collections.map((collection)=>{
                if (!collection.slug) return collection;
                const shouldUseListView = opts.enableAll || opts.listView.collections.includes(collection.slug);
                if (!shouldUseListView) return collection;
                return {
                    ...collection,
                    admin: {
                        ...collection.admin,
                        components: {
                            ...collection.admin?.components,
                            views: {
                                ...collection.admin?.components?.views,
                                ...shouldUseListView && {
                                    list: {
                                        Component: "@launchthat.apps/payload-shadcn/rsc#ListView"
                                    }
                                }
                            }
                        }
                    }
                };
            });
        }
        const existingOnInit = config.onInit;
        config.onInit = async (payload)=>{
            if (existingOnInit) {
                await existingOnInit(payload);
            }
            if (opts.enableAll) {
                payload.logger.info("✨ Payload Shadcn UI Plugin: All components enabled");
            } else {
                if (opts.listView.collections.length > 0) {
                    payload.logger.info(`✨ Payload Shadcn UI Plugin: List view enabled for collections: ${opts.listView.collections.join(", ")}`);
                }
                if (opts.editView.collections.length > 0) {
                    payload.logger.info(`✨ Payload Shadcn UI Plugin: Edit view enabled for collections: ${opts.editView.collections.join(", ")}`);
                }
            }
        };
        return config;
    };
export default shadcnPlugin;

//# sourceMappingURL=shadcnPlugin.js.map