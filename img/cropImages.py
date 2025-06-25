# Re-import needed modules and redefine the function due to kernel reset
from PIL import Image

# Redefine the function for cropping and resizing
def crop_to_aspect_and_resize(image, target_width, target_height):
    target_ratio = target_width / target_height
    img_width, img_height = image.size
    img_ratio = img_width / img_height

    if img_ratio > target_ratio:
        new_width = int(img_height * target_ratio)
        offset = (img_width - new_width) // 2
        crop_box = (offset, 0, offset + new_width, img_height)
    else:
        new_height = int(img_width / target_ratio)
        offset = (img_height - new_height) // 2
        crop_box = (0, offset, img_width, offset + new_height)

    cropped_image = image.crop(crop_box)
    resized_image = cropped_image.resize((target_width, target_height), Image.Resampling.LANCZOS)
    return resized_image

# Reload the uploaded image
input_path = "C:/Users/pauli/Webseite-Jekyll/img/aboutus/gruppenbild.jpg"
original_image = Image.open(input_path)

# Define target sizes again
sizes = [(1110, 400), (690, 400), (375, 400)]

# Process and save images
resized_new_images = []
for width, height in sizes:
    resized_image = crop_to_aspect_and_resize(original_image, width, height)
    output_path = f"C:/Users/pauli/Webseite-Jekyll/img/aboutus/gruppenbild_cropped_{width}x{height}.jpg"
    resized_image.save(output_path)
    resized_new_images.append(output_path)


if __name__ == "main":
    print("Resized images saved at:")
    for img_path in resized_new_images:
        print(img_path)