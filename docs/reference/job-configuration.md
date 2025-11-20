# Full Settings Reference

This page provides a detailed explanation of every option available in the manual job configuration page.

## Processing Preview

This panel gives a real-time overview of your job's cost.

- **Initial Cost:** A small, one-time credit charge for job setup. You can use cloud storage providers to set this to 0
- **Spending Rate:** The cost in credits per minute of processing time on the selected server tier.
- **Maximum Cost:** The maximum amount of credits you will be charged for the job. In the future the job will get paused if it exceeds this amount.
- **Balance Required:** The total credits your account needs to start this job. This is a soft check against your balance and will deduct the amount from your balance if you have enough.

## Quick Presets

These are one-click presets that apply common configurations.

- **Fast Processing:** Optimizes for the quickest possible result.
- **Balanced Speed & Quality:** The recommended default for a great mix of speed, cost, and quality. It is also the default preset option.
- **Maximum Quality:** Optimizes for the best possible visual fidelity.

## Server Configuration

Choose the GPU hardware your job will run on.

- **Standard Server:** Recommended for most projects. Powered by elite consumer GPUs (e.g., RTX 5090) with 24GB of VRAM.
- **Heavy Duty Server:** For extremely large datasets. Powered by data-center GPUs (e.g., H200) with 141GB of VRAM to prevent out-of-memory errors.

## Data Processing

Controls how raw media is converted into a 3D scene. This section is skipped for Pre-aligned Data projects.

### Basic Settings

- **Camera Type:** Specify the camera lens used. `Perspective` for standard phones/DSLRs, `Fisheye` for fisheye lenses, `Equirectangular` for 360° cameras.
- **Matching Strategy:** The algorithm for finding matching points between images. `Sequential` is faster and best for videos. `Vocab Tree` is more robust for unordered photo sets.
- **Number of Downscales:** Creates lower-resolution image copies to improve processing. Recommended `1-3` for 4K+ footage.
- **Frame Sampling Rate:** Frames to extract per second of video. Recommended: `2-5`.

### Advanced Settings

::: warning For Experts
These settings are for advanced users. When in doubt, leave them at their defaults.
:::

- **SFM Tool:** `hloc` is a newer, more advanced tool than the standard `colmap` but way slower.
- **Feature & Matcher (only if hloc is selected):** The specific algorithms for finding keypoints. `disk+lightglue` is a robust modern option.
- **Multiple camera scene (only if hloc is selected):** Enable if you used different cameras or lenses in the same shoot.
- **Same dimentions:** A helper toggle assuming all images are the same resolution.
- **Use SFM depth:** Uses depth information from the SfM process to guide initial Gaussian placement. Can improve density.

## Training

Configures the Gaussian Splat generation process.

### Basic Settings

- **Maximum number of iterations:** Total training steps. `30,000` is a strong default. More steps can add detail but have diminishing returns.
- **Image resolution:** Train on `Full`, `Half` (`0.5`), or `Quarter` (`0.25`) resolution images. Lower resolutions are much faster and use less memory.
- **Training method:** The core algorithm. `splatfacto` is the best balance of speed and quality. `-big` and `-w` variants are for more complex scenes.
- **Spherical Harmonics Degree:** Controls the complexity of lighting and reflections. `3` is very high quality. `0` is flat lighting but much faster.

### Scene and camera settings

- **Camera optimizer:** Further refines camera poses during training. Can fix slight inaccuracies from the data processing step and reduce blurriness.
- **Initialize randomly:** If your initial point cloud is sparse, this adds a large number of random gaussians to help fill in empty space.
- **Background color:** `random` is best for training as it helps define object edges. We do not recommend changing this.

### Densification & Geometry

Settings controlling how Gaussians are split and removed.

- **Refine Every:** How often (in iterations) to run the densification and culling process. More frequent can be better but is slower.
- **Densify Gradient Threshold:** The sensitivity for splitting Gaussians. Lower is more sensitive, creating more detail but potentially more noise.
- **Opacity Culling Threshold:** Threshold for removing transparent gaussians. Lower values preserve more detail and faint structures but increase the final gaussian count (and size).
- **Stop splitting at:** The iteration at which the system stops adding new Gaussians and moves into a refinement-only phase.

### Rendering & Quality

- **Rasterization mode:** `Antialiased` produces higher quality renders with fewer shimmering artifacts, but is slightly slower than `Classic`.
- **SSIM loss weight:** Balances between L1 loss (pixel-perfect sharpness) and SSIM loss (better perceptual quality). A common value is 0.2.
- **Use scale regularization:** A technique to prevent Gaussians from becoming excessively large and "blobby.". Helps reduce "floaters" or large, spiky, and misshapen gaussians that can appear in the scene.
