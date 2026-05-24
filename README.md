# Salamander YOLO Project
## Starting out
- Clone this repo and open it in your editor
- Create Virtual Environment `python -m venv ./backend/venv`
- Start Virtual Environment `./backend/venv\Scripts\Activate.ps1`
- Run `pip install -r requirements.txt` to Install needed dependencies for project.
- Verify with `python -c "from ultralytics import YOLO; import cv2; print('ok')"`
## Capture Images
- Run `python ./backend/scripts/capture.py` for webcam access.
- Capture images from **ensantina.mp4** for training and testing using the spacebar
    - Capture photos using screenshots of the **ensantina.mp4** or when new data for salamanders to train on becomes available.
- Aim for around 50 images for the labeling process.
- Mix easy and hard frames. Change salamander locations, background, lighting, and even exclude salamander from the image.
## Label Images
- Label Images on Label-Studio using `docker run -it -p 8080:8080 -v $(pwd)/data/labelstudio:/label-studio/data heartexlabs/label-studio:latest` This Docker command runs at `http://localhost:8080`
- Create a new project, then drag in all the photos from `data/captured` on Data Import.
- On the Labeling Setup, choose Computer Vision > Object Detection with Bounding Boxes template, then edit the labels to match the classes you have (Salamander, No Salamander)
- Draw bounding boxes on Salamanders, click submit if it has no salamander in it. DON'T ROTATE THE BOUNDING BOXES.
- Once you are done, go to the project page and click Export.
- Pick Yolo with Images as the format.
- Download the zip and extract to `./backend/data` file <-- once created.
## Prepare the Dataset
- Run `python ./backend/scripts/prepare_dataset.py --export-dir ./backend/data` to prepare your dataset.
## Visualize the Augmentations
- Run `python ./backend/scripts/visualize_augmentations.py --image-dir ./backend/data/images` to visualize augmentations to your images.
## Train the Model
- Run `python ./backend/scripts/train.py`to train your model. (Pay attention to where the results get saved, results may not be saved here for some reason)
## Further Information 
- https://github.com/xavierb117/Applied-AI-YOLO-Walkthrough 