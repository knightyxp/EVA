import os

# Define the path to the 'source' directory
source_path = './supplementary/'

# Walk through the 'compare_videos' directory
for root, dirs, files in os.walk(os.path.join(source_path, 'compare_videos')):
    for file in files:
        # Check for source_video_1.mp4 and source_video_2.mp4 to delete
        if file in ['source_video_1.mp4', 'source_video_2.mp4']:
            os.remove(os.path.join(root, file))
        # Check for source_video_3.mp4 to rename
        elif file == 'source_video_3.mp4':
            os.rename(os.path.join(root, file), os.path.join(root, 'source_video.mp4'))

# Output the result of the script's actions
print("Deletion and renaming completed.")
