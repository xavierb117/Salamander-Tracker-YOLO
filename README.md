# Salamander YOLO Project
## Frames Labeled & Dataset and training pipeline
### *Total Frames Labeled:* **72**
### Dataset & Pipeline
- We took photos of fake salamanders provided in class. We took multiple photos with different angles, different backgrounds, different amounts of salamanders, and also some without any salamanders to get an even amount of training.
- We uploaded those photos to LabelStudio and then drew bounding boxes around the salamanders. 
## How to run
- Create a venv *(Virtual Environment)* `python -m venv ./venv` then run `.\venv\Scripts\activate`
- run `pip install -r requirements.txt`
- Have two terminals open
- `cd backend` and run `python main.py` in one
- `cd frontend` and run `npm run dev` in the other
- upload video
## Color masking vs YOLO review
- Color masking was interesting because it took a lot of thinking and digesting of the material and libraries to understand how to work with and build the program. Apart from learning it wasn't always accurate for detection. Different shades could throw it off easily, and having the wrong color selected could highlight unwanted areas. Although it isn't as accurate as a trained model, it still has its benefits towards detection, brightly colored objects can be one.
- The YOLO model was also fun to learn and mess with, it took a little bit of understanding before it was obvious what it was capable of. Its been really easy to work with and progress with. Taking photos then using LabelStudios UI to draw bounding boxes around the salamanders has been easy todo vs understanding the euclidean color distance, but overall humbling learning how much training goes behind a powerful model.
