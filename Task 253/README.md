## Sprint 2, Task 253: On the popup style window, display the orbit and rotation information

### This sun model is built in Blender 4.2.   

![248249](https://github.com/MissionToPsyche-Iridium/iridium_23e_year_sim-se/blob/Task248_249_US169/248248.png)

Tasks 248 and 249 were about adding overlays to the sun model to display information. Pages are added in the pageInfo.js script. 



### Installing Local Dependencies and Running Vite (assuming Node.js is installed)
1. **Initialize your project:**
   ```
   npm init -y
 
   // install Three.js
   npm install --save three

   // install vite
   npm install --save-dev vite
	```
2. **Start the Vite server:**
   - Option 1 (without modifying `package.json`):
     ```bash
     npx vite
     ```
   - Option 2 (with a custom script):
     Add this to `package.json`:
     ```json
     "scripts": {
       "dev": "vite"
     }
     ```
     Then run:
     ```bash
     npm run dev
     ```

