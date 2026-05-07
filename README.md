# Salamander YOLO Project
## Starting out
- Capture images from **ensantina.mp4** for training and testing 
    - Capture photos using screenshots of the **ensantina.mp4** or when new data for salamanders to train on becomes available.
- Create Virtual Environment `python -m venv ./backend/venv`
- Start Virtual Environment `./backend/venv\Scripts\Activate.ps1`
## Label Images
- Label Images on Label-Studio using `docker run -it -p 8080:8080 -v $(pwd)/data/labelstudio:/label-studio/data heartexlabs/label-studio:latest` This Docker command runs at `http://localhost:8080`
- Or we can alternatively install Label-Studio into our Virtual Environment with `pip install -U label-studio` Then start with `label-studio start` 
## Install Dependencies
- Run `pip install -r requirements.txt` to Install needed dependencies for project.