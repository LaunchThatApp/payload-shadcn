#!/bin/bash

# This script adds the 'use client' directive to all UI components
echo "Adding 'use client' directive to UI components..."

# Find all .tsx files in the components directory
FILES=$(find src/components/ui -name "*.tsx")

# Add "use client" directive to each file if it doesn't already have it
for file in $FILES
do
  # Check if file already has "use client" directive
  if ! grep -q "use client" "$file"; then
    echo "Adding 'use client' directive to $file"
    # Create a temporary file with the "use client" directive
    echo '"use client"' > temp_file
    echo "" >> temp_file
    cat "$file" >> temp_file
    # Replace the original file with the temporary file
    mv temp_file "$file"
  fi
done

echo "Done adding 'use client' directives to UI component files"

# Now also add 'use client' to client-specific view components
CLIENT_VIEWS=$(find src/components/views -name "*.client.tsx")

for file in $CLIENT_VIEWS
do
  # Check if file already has "use client" directive
  if ! grep -q "use client" "$file"; then
    echo "Adding 'use client' directive to $file"
    # Create a temporary file with the "use client" directive
    echo '"use client"' > temp_file
    echo "" >> temp_file
    cat "$file" >> temp_file
    # Replace the original file with the temporary file
    mv temp_file "$file"
  fi
done

echo "Done adding 'use client' directives to client view files" 