import os

# Replace with the path to your folder
folder_path = 'src/assets/images/'

# Iterate over all files in the folder
for filename in os.listdir(folder_path):
    # Check if the file is a .jpeg
    if filename.endswith('.jpeg'):
        # Create the new filename by replacing .jpeg with .jpeg
        new_filename = filename.replace('.jpeg', '.jpeg')
        
        # Rename the file
        os.rename(
            os.path.join(folder_path, filename),
            os.path.join(folder_path, new_filename)
        )

print("All .jpeg files have been renamed to .jpeg!")
