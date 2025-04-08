@echo off
echo Installing deployment dependencies...
npm install gh-pages rimraf --save-dev
echo.
echo Deployment setup complete!
echo.
echo You can now deploy your site to GitHub Pages using:
echo npm run deploy
echo.
echo Or let GitHub Actions handle deployment automatically when you push to main.
echo.
pause