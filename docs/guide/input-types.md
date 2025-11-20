# Understanding Input Types

Splattr supports several types of input data, each with its own workflow.

### Photos

- **Format:** A `.zip` archive containing a collection of images (`.jpg`, `.png`).
- **Workflow:** This is a "Standard" project. Splattr will run the full data processing pipeline to analyze your images, calculate camera positions, and then train the splat.
- **Best for:** Unordered photo sets taken with a DSLR or smartphone.

### Videos

- **Format:** A video file (`.mp4`, `.mov`, `.avi`, `.webm`).
- **Workflow:** This is also a "Standard" project. Splattr will first extract frames from your video based on your "Frame Sampling Rate" setting, then proceed with the full data processing and training pipeline.
- **Best for:** Capturing scenes with smooth, continuous camera motion.

### Pre-aligned Data

::: tip For Advanced Users
This workflow is for users who have already processed their images with other software and have calculated camera poses.
:::

- **Format:** A `.zip` archive containing a specific file that describes the camera positions.
- **Workflow:** This workflow skips the expensive "Data Processing" stage, saving you significant time and credits. Splattr will read the provided camera data and proceed directly to the "Training" stage.
- **Supported Formats:**
  - **`transforms.json`:** The standard format used by Nerfstudio and other popular tools.
  - **Metashape:** A `.zip` containing a `cameras.xml` (you can name it whatever you want) file exported from Agisoft Metashape.
  - **RealityScan / RealityCapture:** A `.zip` containing a csv file (named however you want) exported from the application.
