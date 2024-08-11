import os
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.conf import settings
from urllib.parse import unquote

@csrf_exempt
@require_POST
def handle_file_action(request):
    file_path = unquote(request.POST.get('file_path', ''))
    action = request.POST.get('action')
    
    # Debugging
    print("Received file_path:", file_path)
    print("Action:", action)
    
    if not file_path or not action:
        return JsonResponse({'status': 'error', 'message': 'Missing parameters'}, status=400)
    
    # Use base directory from environment variables
    base_dir = os.getenv('BASE_DIR', '/default/path')
    abs_file_path = os.path.join(base_dir, file_path)
    abs_file_path = os.path.normpath(abs_file_path)
    
    print("Absolute file path:", abs_file_path)
    print("File exists:", os.path.exists(abs_file_path))
    
    if action == 'delete':
        try:
            if os.path.exists(abs_file_path):
                os.remove(abs_file_path)
                return JsonResponse({'status': 'success', 'message': 'File deleted successfully'})
            else:
                return JsonResponse({'status': 'error', 'message': f'File not found: {abs_file_path}'}, status=404)
        except OSError as e:
            error_message = f'Error deleting file: {str(e)}'
            print(error_message)
            return JsonResponse({'status': 'error', 'message': error_message}, status=500)
    elif action == 'keep':
        return JsonResponse({'status': 'success', 'message': 'File kept'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Invalid action'}, status=400)