# Salamander YOLO Project
## Starting out
- Capture images from **ensantina.mp4** for training and testing 
    - Capture photos using screenshots of the **ensantina.mp4** or when new data for salamanders to train on becomes available.
- Create Virtual Environment `python -m venv ./backend/venv`
- Start Virtual Environment `./backend/venv\Scripts\Activate.ps1`
## Label Images
- Label Images on Label-Studio using `docker run -it -p 8080:8080 -v $(pwd)/data/labelstudio:/label-studio/data heartexlabs/label-studio:latest` This Docker command runs at `http://localhost:8080`
- Collect photos without salamanders in them.
- Draw bounding boxes **Object Detection with Bounding Boxes** <-- Select on Label-Studio
- Export Images select **YOLO with Images**
- Download the zip and extract to `./backend/data` file <-- once created.
## Install Dependencies
- Run `pip install -r requirements.txt` to Install needed dependencies for project.
## Further Information 
- https://github.com/xavierb117/Applied-AI-YOLO-Walkthrough 