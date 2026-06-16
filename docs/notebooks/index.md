# Table of Contents

*Natural Language Processing: A Hands-On, Notebook-Based Introduction*

This open textbook is built from **interactive Jupyter notebooks**. Read each chapter
inline, launch it in **Google Colab** with one click, or download it to run locally.
New to the book? Start with the [Preface](../ebook/preface.md).

!!! tip "How to run a chapter"
    At the top of every chapter you'll find a launch bar:

    - **Open in Colab** — run it in your browser on a free Google Colab runtime.
    - **View on GitHub** — read the source.
    - **Download .ipynb** — run it locally in Jupyter or VS Code.

## I — Language Model Foundations

| Ch | Chapter | Topics |
|----|---------|--------|
| 1 | [Tokenization & Vocabulary](hw1/Assignment_1.ipynb) | Subword segmentation, vocabulary design, OOV handling, n-grams |
| 1+ | [Setup Tutorial](hw1/setup_tutorial.ipynb) | Environment & Python package setup |
| 1+ | [AI Usage Example](hw1/check_word.ipynb) | Responsible AI-assisted problem solving |

## II — Machine Learning Foundation and NLP Tasks

| Ch | Chapter | Topics |
|----|---------|--------|
| 2 | [Text Classification](hw2/Assignment_2.ipynb) | Sentence classification, logistic regression |

## III — Representations & Sequences

| Ch | Chapter | Topics |
|----|---------|--------|
| 3 | [Embeddings & Sequence Models](hw3/Assignment_3.ipynb) | Word embeddings, RNNs, token classification |

## IV — Transformers & LLMs

| Ch | Chapter | Topics |
|----|---------|--------|
| 4 | [Transformers & LLMs](hw4/Assignment_4.ipynb) | Attention, transformers, pretrained models |
| 4+ | [Transformer Illustrated](hw4/Transformer_Illustration.ipynb) | Visual, step-by-step transformer walkthrough |

## V — LLM Alignment and Agentic AI

| Ch | Chapter | Topics |
|----|---------|--------|
| 5 | [Fine-Tuning with LoRA/QLoRA](hw5/Part1-sft_trl_lora_qlora.ipynb) | Supervised fine-tuning, parameter-efficient training (TRL) |
| 5+ | [Agentic NLP](hw5/Part2-Exam_Agent_For_NLP.ipynb) | Building an LLM agent with LangGraph |

See the [Roadmap](../ebook/roadmap.md) for chapters in progress and planned.

## Run everything locally

```bash
git clone https://github.com/mlciv/nlp-ebook.git
cd nlp-ebook
python3 -m venv .venv
source .venv/bin/activate
pip install jupyter
jupyter lab
```

The notebooks live in `docs/notebooks/`. Each chapter lists its own additional
dependencies in its first cells.
