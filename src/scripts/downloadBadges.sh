#!/bin/bash

# Define the input file
INPUT_FILE="badgesLinks.ts"

# Create a directory to save the badges
OUTPUT_DIR="../assets/badges"
mkdir -p "$OUTPUT_DIR"

# Array to hold keys with missing or failed downloads
declare -a failed_badges

# Read the input file line by line
while IFS= read -r line; do
  # Use a regex to match lines that define a key-value pair
  if [[ $line =~ ([^[:space:]].+):[[:space:]]*\"(https?://[^\"]*)\" ]]; then
    # Extract the key and the URL
    key="${BASH_REMATCH[1]}"
    url="${BASH_REMATCH[2]}"
    
    # Remove quotes and trailing comma from the key if present
    key=$(echo "$key" | sed -E 's/[",]//g')
    
    # Download the badge and save it with the key name
    wget -q -O "${OUTPUT_DIR}/${key}.svg" "$url"
    
    # Check if the download was successful
    if [[ $? -ne 0 ]]; then
      # If the download failed, add the key to the failed_badges array
      failed_badges+=("$key")
    fi
  elif [[ $line =~ ([^[:space:]]+):[[:space:]]*null ]]; then
    # Extract the key
    key="${BASH_REMATCH[1]}"
    
    # Remove quotes and trailing comma from the key if present
    key=$(echo "$key" | sed -E 's/[",]//g')
    
    # Add the key to the failed_badges array as it has no URL
    failed_badges+=("$key")
  fi
done < "$INPUT_FILE"

# Display the list of badges that don't have links or failed to download
if [[ ${#failed_badges[@]} -ne 0 ]]; then
  echo "The following badges either don't have a link or the download failed:"
  for badge in "${failed_badges[@]}"; do
    echo "- $badge"
  done
else
  echo "All badges downloaded successfully."
fi
