# Using Pre-processed Data

For advanced users who have already processed their images to calculate camera poses, Splattr offers a "Pre-processed" project type. This workflow allows you to skip our data processing stage entirely, saving both (a lot of) time and credits.

## The "NeRF Studio" Format
<small>Please see https://docs.nerf.studio/quickstart/data_conventions.html</small>

Splattr is compatible with the standard dataset format used by many popular tools, including Nerfstudio, Kiri Engine, Polycam, Luma AI, and raw COLMAP outputs.

The core requirement is a specific folder structure containing your images and a `transforms.json` file.

### Required File Structure

To be valid, your project must be compressed into a single **`.zip`** file with the following internal structure:

```
my_project.zip
├── images/
│ ├── frame_0001.jpg
│ ├── frame_0002.jpg
│ └── ...
└── transforms.json
```

- **`transforms.json`:** This file must be at the **root** of the ZIP archive. It contains the camera intrinsics and the calculated camera-to-world transformation matrix for every image in your scene.
- **`images/` folder:** This folder (which can also be named `image/`) contains all the source images referenced within `transforms.json`. The file paths inside `transforms.json` must correctly point to the images within this folder (e.g., `"file_path": "images/frame_0001.jpg"`).

### How to Create a Pre-processed Project

1.  **Prepare Your Data:** Ensure your processed data matches the required file structure and compress it into a single `.zip` file.
2.  **Select Project Type:** In the Splattr "New Splat" flow, choose the **"Processed Data"** option. This will configure the job to skip the data processing stage. ![Select preprocessed in splattr](/guide/preprocessed/select.png)
3.  **Upload & Configure:** Upload your `.zip` file. Our system will validate it on the client side to give you an instant price quote. You can then configure your _Training_ settings (Training Method, Iterations, Compute Tier) as usual.
4.  **Start Your Job:** The final credit cost will only be for the training stage, making it significantly cheaper than a standard project.

### Benefits of Using Pre-processed Data

- **Save Credits:** You are not charged for the data processing or feature matching stages.
- **Use External Tools:** It allows you to use specialized tools like RealityCapture, Metashape, or your own custom COLMAP scripts to generate camera poses, giving you maximum control over the pre-processing pipeline.
- **Interoperability:** Easily move projects between Splattr and other platforms that support the NeRF Studio format.

### Troubleshooting

- **"transforms.json not found":** This error means the `transforms.json` file is not at the root of your ZIP archive. Re-compress your files, ensuring it is not inside any sub-folders.
- **"Image not found":** This error means a file path listed in `transforms.json` (e.g., `images/frame_0001.jpg`) does not exist at that location within your ZIP file. Please verify that all image paths are correct and all images are included.
