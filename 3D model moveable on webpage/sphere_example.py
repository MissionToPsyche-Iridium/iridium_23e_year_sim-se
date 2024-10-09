import bpy
import math

# Delete all existing objects in the scene (helps when reloading)
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# Create a 3D sphere
bpy.ops.mesh.primitive_uv_sphere_add(
    enter_editmode=False, 
    align='WORLD', 
    location=(0, 0, 0), 
    radius=3
)
sphere = bpy.context.object  # Reference the sphere you just created
sphere.name = "My3DSphere"  # Name the sphere

bpy.ops.object.shade_smooth()  # Apply smooth shading for 3D appearance

x_degree = 83
y_degree = 180
z_degree = -988
x = math.radians(x_degree)
y = math.radians(y_degree)
z = math.radians(z_degree)

# Add a camera at a good position
bpy.ops.object.camera_add(
    enter_editmode=False, 
    align='VIEW', 
    location=(15, 0, -2),  # Position the camera to get a good 3D view of the sphere
    rotation=(x, y, z)  # Rotate the camera to face the sphere
)
camera = bpy.context.object  # Reference the camera

# Set the camera as the active camera for rendering
bpy.context.scene.camera = camera

# Add a sun light for better shadows and 3D depth
bpy.ops.object.light_add(type='SUN', location=(5, -5, 10))
light = bpy.context.object  # Reference the light
light.data.energy = 5  # Adjust the intensity of the sunlight

# Add a new material for the sphere
material = bpy.data.materials.new(name="GreenMaterial")
material.use_nodes = True  # Enable node-based shading

# Set the material's Principled BSDF node to a green color
bsdf = material.node_tree.nodes.get("Principled BSDF")
bsdf.inputs['Base Color'].default_value = (0, 1, 0, 1)  # Green color
bsdf.inputs['Roughness'].default_value = 0.4  # Slightly shiny for 3D effect


sphere.data.materials.append(material)

bpy.context.view_layer.objects.active = sphere
