# Job Settings Reference

This page explains every option available on the "Create your first splat" page.

## Data & Pre-processing

This section controls how your initial video or image files are prepared for training. These settings only apply to **Standard (Raw Media)** projects.

### Image Downscaling

- **What it does:** Creates lower-resolution copies of your original images (e.g., half-size, quarter-size). The main training process then uses these multiple resolutions to improve detail and stability, especially for very high-resolution source images (4K+).
- **When to use it:** For high-resolution (4K) photos or videos, setting this to `2` or `3` can improve the final quality. For standard 1080p footage, the default of `0` is usually best.
- **Cost:** Each downscale level performs significant extra work during data processing and will increase the credit cost of your job.

### Frame Sampling Rate

- **What it does:** Defines how many still images (frames) to extract for every second of video you upload. A 10-second video with a rate of `2` will generate 20 images.
- **When to use it:** `2` or `3` is recommended for most videos shot with slow, smooth motion. A higher rate like `5` can be useful for faster camera movements, but it will significantly increase the image count and the job cost.
- **Tip:** There is no benefit to setting this higher than your video's original frame rate (e.g., 30fps).

### Matching Strategy

- **What it does:** This is the core algorithm used to find matching features between your images to understand the camera's position.
- **Options:**
  - **`sequential` (Default):** Assumes your images are in order, like frames from a video. It is highly efficient and much faster. **Always use this for videos.**
  - **`vocab_tree`:** A much more powerful (and slower) method designed for unordered photo sets. It builds a "vocabulary" of visual features to find matches even if the photos are out of order. **Use this for photo sets.** This method is more computationally intensive and costs more credits.

## Compute Tier

This determines the type of hardware your job will run on. Your choice here significantly impacts both the credit cost and the type of project you can successfully complete.

### Standard Tier

::: tip Recommended
This is the workhorse for the vast majority of projects, offering the best value for incredible results.
:::

Powered by a fleet of elite consumer GPUs including the **NVIDIA RTX 5090, RTX 4090, and RTX A6000**, this tier is the most cost-effective choice. It is powerful enough to handle everything from your first experiments to large, detailed scenes with thousands of photos.

### Heavy Duty Tier

::: warning For Massive Datasets
Choose this tier to prevent out-of-memory errors on extremely large or high-resolution projects.
:::

The Heavy Duty tier is not necessarily faster, but it is far more powerful. It is designed specifically to handle jobs that would fail on standard hardware due to memory limitations. Powered by data-center grade **NVIDIA H100 & H200** GPUs, it provides access to a massive pool of VRAM.

**You should choose the Heavy Duty tier if your project involves:**

- **Huge Image Counts:** Datasets with well over 2,500 images.
- **Very High-Resolution Source Files:** Working with a large number of 4K (or higher) resolution images.
- **Memory-Intensive Models:** Using the `nerfacto-huge` training method, which has significant memory requirements.

For these demanding jobs, the Heavy Duty tier is the only way to ensure your project completes successfully.

## Training Configuration

These advanced options fine-tune the final training process.

### Training Method

- **What it does:** This is the main algorithm used to build the 3D Gaussian Splat from your processed data.
- **Options:**
  - **`splatfacto` (Default):** The recommended method for the best balance of speed, quality, and cost.
  - **`splatfacto-big`:** A larger version that can capture more fine-grained detail, at a higher credit cost.
  - **`splatfacto-w`:** A special version for "in-the-wild" photo collections that have very different lighting conditions between shots.
  - **`nerfacto`:** Uses different technology (NeRF) which can sometimes better handle tricky surfaces like glass or reflections, but is significantly slower.
  - **`nerfacto-big` / `nerfacto-huge`:** Extremely large and slow models for professional use cases requiring the absolute highest detail reconstruction. They are very expensive.

### Maximum number of iterations

- **What it does:** Controls for how many "steps" the training algorithm runs. More steps can lead to a more refined result.
- **Recommendation:** The default of **30,000** is a well-tested value that produces excellent results for most scenes. Increasing it can sometimes add minor details but often has diminishing returns and will increase the training cost. You can think of this as "polishing" the splat.
