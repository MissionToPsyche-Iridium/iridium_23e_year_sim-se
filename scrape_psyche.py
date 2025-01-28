import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

# Set the base URL of the website you want to download
base_url = 'https://psyche.asu.edu/'

# Create a directory to store the downloaded files
output_dir = 'downloaded_website'
os.makedirs(output_dir, exist_ok=True)

# Download the main page (index.html)
response = requests.get(base_url)
if response.status_code != 200:
    print(f"Failed to fetch {base_url}")
    exit()

# Save the main page as index.html
html_content = response.text
soup = BeautifulSoup(html_content, 'html.parser')

# Function to download assets (CSS, JS, images)
def download_asset(url, folder):
    try:
        asset_response = requests.get(url)
        if asset_response.status_code == 200:
            asset_name = os.path.basename(urlparse(url).path)
            save_path = os.path.join(output_dir, folder, asset_name)
            os.makedirs(os.path.dirname(save_path), exist_ok=True)
            with open(save_path, 'wb') as asset_file:
                asset_file.write(asset_response.content)
            return f"{folder}/{asset_name}"
    except Exception as e:
        print(f"Failed to download asset {url}: {e}")
    return None

# Process and download assets
for tag, attr, folder in [('link', 'href', 'css'), ('script', 'src', 'js'), ('img', 'src', 'images')]:
    for element in soup.find_all(tag):
        asset_url = element.get(attr)
        if asset_url:
            # Convert relative URLs to absolute
            full_url = urljoin(base_url, asset_url)
            local_path = download_asset(full_url, folder)
            if local_path:
                element[attr] = local_path

# Save the updated index.html file
with open(os.path.join(output_dir, 'index.html'), 'w', encoding='utf-8') as file:
    file.write(str(soup))

print(f"Website downloaded successfully to {output_dir}/index.html")
