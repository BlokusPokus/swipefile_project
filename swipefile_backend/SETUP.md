# Backend Setup Instructions

To properly configure the backend of your project, you need to specify the base directory and other sensitive information using environment variables. Follow the steps below to ensure everything is set up correctly.

## Prerequisites

Make sure you have the following installed on your machine:
- [Python](https://www.python.org/)
- [pip](https://pip.pypa.io/en/stable/installation/)

## Steps

1. **Clone the repository**:
   - If you haven't already, clone the repository to your local machine.

2. **Navigate to the backend directory**:
   - Open a terminal and navigate to the `swipefile_backend` directory.

3. **Create a virtual environment**:
   - Run the following command to create a virtual environment:
     ```bash
     python -m venv venv
     ```

4. **Activate the virtual environment**:
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

5. **Install dependencies**:
   - Run the following command to install all necessary dependencies:
     ```bash
     pip install -r requirements.txt
     ```

6. **Create a `.env` file**:
   - In the `swipefile_backend` directory, create a file named `.env` and add the following content:
     ```env:.env
     SECRET_KEY=your-secret-key
     BASE_DIR=your-base-dir
     DEBUG=True
     ```

7. **Update `settings.py`**:
   - Ensure that `settings.py` is configured to load environment variables from the `.env` file. Here is an example of the relevant section:
     ```python:swipefile_backend/settings.py
     import os
     from pathlib import Path
     from dotenv import load_dotenv

     # Load environment variables from .env file
     load_dotenv()

     # Build paths inside the project like this: BASE_DIR / 'subdir'.
     BASE_DIR = Path(__file__).resolve().parent.parent

     # Use environment variables for sensitive settings
     SECRET_KEY = os.getenv('SECRET_KEY', 'default-secret-key')
     DEBUG = os.getenv('DEBUG', 'False') == 'True'

     MEDIA_URL = '/media/'
     MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

     # ... existing code ...
     ```

8. **Run the development server**:
   - Start the development server by running:
     ```bash
     python manage.py runserver
     ```
   - Open [http://127.0.0.1:8000](http://127.0.0.1:8000) to view it in the browser.

## Conclusion

By following these steps, you will ensure that your backend is correctly configured to use environment variables for sensitive information. This makes your setup more secure and easier to manage.

For more information, refer to the [Django documentation](https://docs.djangoproject.com/en/3.2/topics/settings/).