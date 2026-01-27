# Protegrity Developer Edition - Getting Started Notebook

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/protegrity/dev-edition-notebook/HEAD?filepath=getting-started-protection_binder.ipynb)

This repository contains an interactive Jupyter Notebook that demonstrates the **Protegrity AI Developer SDK** for protecting sensitive data.

## Quick Start

Click the "launch binder" badge above to run this notebook in your browser without any installation. Binder will build a containerized environment with all dependencies pre-installed.

## Running Locally

If you prefer to run the notebook on your local machine:

1. **Clone this repository:**
   ```bash
   git clone https://github.com/protegrity/dev-edition-notebook.git
   cd dev-edition-notebook
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Launch Jupyter Notebook:**
   ```bash
   jupyter notebook getting-started-protection_binder.ipynb
   ```

## What You'll Learn

- How to authenticate with the Protegrity API
- Creating and configuring protection binders
- Applying data protection policies
- Working with protected data in your applications

## Protegrity UI Branding

This repository includes custom branding for the Jupyter Notebook interface, automatically applied when running on Binder.

### What's Branded

The Jupyter Notebook UI features Protegrity's visual identity:

- **Header**: Orange accent border (#FA5A25) on the notebook header
- **Selected Cells**: Orange left border indicator for the active cell
- **Buttons & Interactions**: Orange hover states and focus indicators
- **Typography**: Modern sans-serif fonts throughout the interface
- **Browser Tab**: "Protegrity | [notebook name]" title prefix
- **Color Scheme**: Consistent use of Protegrity brand colors:
  - Orange: `#FA5A25`
  - Dark Gray: `#373737`
  - Slate: `#6D758D`
  - White: `#FFFFFF`

### Implementation Details

The branding is implemented through:

- **Custom CSS**: `assets/jupyter/custom.css` - Styles the Jupyter UI
- **Custom JS**: `assets/jupyter/custom.js` - Sets the browser tab title
- **Binder Hook**: `binder/postBuild` - Installs branding during image build

### How It Works on Binder

When Binder builds the environment:

1. The `binder/postBuild` script runs automatically
2. Custom files are copied from `assets/jupyter/` to `~/.jupyter/custom/`
3. Jupyter loads these custom files on startup
4. Branding is applied to the notebook interface

No manual steps are required - the branding "just works" when you launch via Binder.

### Customizing the Branding

To adjust colors or styling:

1. **Edit CSS**: Modify `assets/jupyter/custom.css`
   - Update color values (search for `#FA5A25`, `#373737`, etc.)
   - Adjust font families, sizes, or spacing
   - Add or remove style rules

2. **Edit JS**: Modify `assets/jupyter/custom.js`
   - Change the title prefix (default: "Protegrity | ")
   - Add custom behavior or event handlers

3. **Test Locally**:
   ```bash
   # Copy custom files to your local Jupyter config
   mkdir -p ~/.jupyter/custom
   cp assets/jupyter/custom.css ~/.jupyter/custom/
   cp assets/jupyter/custom.js ~/.jupyter/custom/
   
   # Restart Jupyter to see changes
   jupyter notebook
   ```

4. **Deploy**: Commit your changes - Binder will pick them up on the next build

### Compatibility Notes

- **Classic Notebook**: Full support - all branding features work
- **JupyterLab**: No impact - custom.css/custom.js only affect classic Jupyter
- **Execution**: Branding is UI-only and does not affect notebook execution or kernels
- **Safety**: All customizations use stable CSS selectors and fail gracefully

### File Locations

```
dev-edition-notebook/
├── assets/
│   ├── jupyter/
│   │   ├── custom.css        # Jupyter UI stylesheet
│   │   └── custom.js          # Browser tab title script
│   └── protegrity-logo.png    # Logo for in-notebook branding
├── binder/
│   └── postBuild              # Installation script (runs on Binder build)
└── getting-started-protection_binder.ipynb
```

### Disabling Branding

To run without custom branding:

**On Binder**: Remove or comment out the file copy commands in `binder/postBuild`

**Locally**: Remove the custom files:
```bash
rm ~/.jupyter/custom/custom.css
rm ~/.jupyter/custom/custom.js
```

Then restart Jupyter.

## Requirements

- Python 3.8+
- Protegrity API credentials ([Get yours here](https://www.protegrity.com/developers/get-api-credentials))

## Support

For questions or issues with the SDK or this notebook:
- 📧 Email: developer-support@protegrity.com
- 📚 Documentation: [https://docs.protegrity.com/developers](https://docs.protegrity.com/developers)
- 🌐 Website: [https://www.protegrity.com/developers](https://www.protegrity.com/developers)

## License

Copyright © 2026 Protegrity Corporation. All rights reserved.
