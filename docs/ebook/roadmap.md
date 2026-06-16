# Roadmap

This book is **actively growing**. The five chapters below have been class-tested as
course assignments; additional chapters are planned as the open textbook is expanded
under the OU Alternative Textbook Grant 2025–2026.

## Available now

The five class-tested chapters are delivered as interactive notebooks. Although the
course runs **five assignments**, each notebook spans several subtopics, so the chapters
cover considerably more than five discrete topics. The "Inside this chapter" column lists
the subsections found in each assignment notebook.

| Part | Chapter | Inside this chapter | Status |
|------|---------|---------------------|--------|
| Language Model Foundations | **1. [Tokenization & Vocabulary](../notebooks/hw1/Assignment_1.ipynb)**<br>_Supplements:_ [Setup Tutorial](../notebooks/hw1/setup_tutorial.ipynb), [AI Usage Example](../notebooks/hw1/check_word.ipynb) | **Part 1 — Analyze the Llama-3.1 vocabulary**<br>&nbsp;&nbsp;• Setup: Python environment, VSCode, the OSCER cluster<br>&nbsp;&nbsp;• Load the Llama-3 tokenizer locally; test it on English, emojis, and combining characters<br>&nbsp;&nbsp;• Explore the vocabulary with Linux command-line tools<br>&nbsp;&nbsp;• Study your own open research question on the vocabulary<br>**Part 2 — N-gram language model**<br>&nbsp;&nbsp;• Input files: training, test, seeds<br>&nbsp;&nbsp;• Task 1 — compute sentence probability<br>&nbsp;&nbsp;• Task 2 — build a language generator<br>**Statement of AI usage**<br>_Setup Tutorial:_ Conda vs. Mamba vs. Venv; UV / Poetry / pip / Conda / virtualenv; Conda on Colab; intro to Jupyter; Pythonic Python | :material-check-circle: Available |
| Machine Learning Foundation and NLP Tasks | **2. [Text Classification](../notebooks/hw2/Assignment_2.ipynb)** | **Section 1 — Dataset exploration**<br>&nbsp;&nbsp;• Inspect the data; positive/negative class balance<br>&nbsp;&nbsp;• Train/dev split; evaluation metrics<br>**Section 2 — Logistic regression**<br>&nbsp;&nbsp;• Random-chance baseline classifier<br>&nbsp;&nbsp;• Preprocessing and feature extraction<br>&nbsp;&nbsp;• Train a binary logistic-regression classifier<br>**Section 3 — Multinomial logistic regression**<br>&nbsp;&nbsp;• Exploratory data analysis on SST-5<br>&nbsp;&nbsp;• Build a multiclass sentiment classifier from scratch | :material-check-circle: Available |
| Representations & Sequences | **3. [Embeddings & Sequence Models](../notebooks/hw3/Assignment_3.ipynb)** | **Part 1 — Word embedding**<br>&nbsp;&nbsp;• History: symbolic vs. neural vs. neuro-symbolic (WordNet → ImageNet; SHRDLU → ChatGPT)<br>&nbsp;&nbsp;• The distributional hypothesis<br>&nbsp;&nbsp;• Train embeddings with a neural n-gram LM: training, batch training, evaluation, n-gram probability, text generation<br>&nbsp;&nbsp;• Further exploration on OSCER<br>**Part 2 — Deep networks for sentiment**<br>&nbsp;&nbsp;• Deep Averaging Networks<br>&nbsp;&nbsp;• PyTorch LSTM<br>&nbsp;&nbsp;• Train a word embedding with Gensim | :material-check-circle: Available |
| Transformers & LLMs | **4. [Transformers & LLMs](../notebooks/hw4/Assignment_4.ipynb)**<br>_Supplement:_ [Transformer Illustrated](../notebooks/hw4/Transformer_Illustration.ipynb) | **Part 1 — Machine translation**<br>&nbsp;&nbsp;• Setup and data exploration<br>&nbsp;&nbsp;• Seq2Seq model: encoder, decoder, training setup<br>&nbsp;&nbsp;• Context vector at every decoding step<br>&nbsp;&nbsp;• Attention-based context vector (attention decoder)<br>&nbsp;&nbsp;• Transformer-based machine translation<br>**Part 2 — Transformers & pretrained LMs**<br>&nbsp;&nbsp;• Transformer-based sentiment classifier<br>&nbsp;&nbsp;• HuggingFace `Trainer` for BERT<br>&nbsp;&nbsp;• Sentiment via LLM prompting — unconstrained, chat format with Pydantic & Outlines, with explanations<br>_Transformer Illustrated:_ EncoderDecoder & Generator, encoder/decoder stacks, self- and multi-head attention, decoder masking, encoder–decoder attention, linear + softmax, feed-forward sub-layer, positional encoding, learnable embeddings, full model | :material-check-circle: Available |
| LLMs and Agentic AI | **5. [Fine-Tuning with LoRA/QLoRA](../notebooks/hw5/Part1-sft_trl_lora_qlora.ipynb)** & **[Agentic NLP](../notebooks/hw5/Part2-Exam_Agent_For_NLP.ipynb)** | **Part 1 — Supervised fine-tuning (SFT) with TRL** _(free Colab)_<br>&nbsp;&nbsp;• Key concepts; install dependencies; log in to Hugging Face<br>&nbsp;&nbsp;• Load the dataset; configure LoRA/QLoRA<br>&nbsp;&nbsp;• Train, save, and run inference<br>&nbsp;&nbsp;• Push the merged model<br>**Part 2 — Agentic NLP: an exam agent**<br>&nbsp;&nbsp;• Build an LLM agent with LangGraph (ReAct: act / observe / reason)<br>&nbsp;&nbsp;• Design tool functions so the agent solves the quiz correctly<br>&nbsp;&nbsp;• Build a second agent to grade the answers automatically | :material-check-circle: Available |

## Planned chapters

These topics are candidates for future chapters. The list is tentative and will evolve.

- **Evaluation of NLP & LLM systems** — metrics, benchmarks, human evaluation, LLM-as-judge.
- **Post-training & reinforcement learning** — RLHF, reward models, PPO, DPO, and RLAIF.
- **Self-evolving LLMs** — self-improvement, self-training, and self-correction loops.
- **Responsible NLP** — bias, fairness, safety, and limitations.

!!! note "Suggestions welcome"
    If you are using this book and would like to see a particular topic covered, please
    reach out to the author (see the [Preface](preface.md)).
