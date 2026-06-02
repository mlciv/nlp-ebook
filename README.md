# CS-5293 Course Website (Interactive Notebooks)

An interactive, notebook-based NLP course site built with **MkDocs + Material for
MkDocs** and **mkdocs-jupyter**. Course chapters are real Jupyter notebooks
rendered inline; each notebook page gets an auto-injected launch bar with
**Open in Colab**, **View on GitHub**, and **Download .ipynb** buttons.

The site is **self-contained**: all notebooks live in this repo under
`docs/notebooks/`. There is no external sync step.

## Project structure

- `mkdocs.yml` - site config, plugins, navigation
- `docs/index.md` - home page
- `docs/notebooks/index.md` - notebook chapter index (the course landing point)
- `docs/notebooks/hw1..hw5/` - the actual `.ipynb` chapters, rendered inline
- `docs/assets/notebook-badges.{css,js}` - the Colab/GitHub/Download launch bar
- `docs/schedule.md`, `docs/assignments.md`, `docs/project.md`, `docs/resources.md`

## Run locally

```bash
cd course-website
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Open <http://127.0.0.1:8000>.

## Adding or updating notebooks

1. Add or edit `.ipynb` files under `docs/notebooks/hwN/`.
2. Add the notebook to the `nav:` block in `mkdocs.yml` to give it a chapter slot.
3. If it should have a Colab button, add its slug (path without `.ipynb`) to
   `NOTEBOOK_SLUGS` in `docs/assets/notebook-badges.js`, and confirm `REPO`/`BRANCH`.
4. Run `mkdocs serve` and check the page.

## Deploy options

- **GitHub Pages:** use `mkdocs gh-deploy`
- **Netlify / Vercel / any static host:** deploy the generated `site/` folder from `mkdocs build`
