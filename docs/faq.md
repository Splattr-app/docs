# FAQ & Troubleshooting

## Why is my splat blurry or has holes?

This is almost always caused by poor input data. The most common reasons are: not enough photos/video coverage, blurry images/video, or a subject that was not perfectly still. Please review our **[Capture Best Practices guide](./guide/capture-guide.md)** and try re-capturing your scene.

## What's the difference between Standard and Heavy Duty GPUs?

The Heavy Duty tier uses more powerful, data-center grade GPUs (like NVIDIA H200s).
These do not necessarily process jobs significantly faster, but their large amoutn of VRAM allows for more complex scenes without running out of memory. This power comes at a higher credit cost. In the majority of cases, the Standard tier is the most cost-effective for most projects.

## What do credits mean?

Credits are the currency of Splattr. Every job has a fixed cost based on its settings (resolution, training method, etc.). You can buy credits in packs or get them with a Pro subscription. This model ensures you only pay for what you use and know the exact cost before you start.

## Can I get a refund on unused credits?

As per our Terms of Service, purchases of Credit Packs and Subscriptions are final and non-refundable except as required by law.

## Is there a way to view a `.ply` file without uploading it?

Yes! Splattr includes a free, browser-based **Pointcloud Viewer** accessible from the "Tools" menu. This simple tool lets you quickly drag-and-drop a `.ply` file to preview it instantly. It uses the same engine (babylon.js) as our main splat viewer, supporting both orbit and first-person controls. Files you preview here are processed locally in your browser and are never uploaded to our servers.
