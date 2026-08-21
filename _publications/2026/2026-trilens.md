---
title: "TriLens: Per-Layer Logit-Lens Entropy for White-Box Hallucination Detection"
date: 2026-05-28 00:01:00 +0800
cover: /assets/images/covers/trilens.png
selected: true
selected_order: 1
publication_order: 1
pub: "Findings of EMNLP 2026"
pub_pre: '<span class="badge badge-pill badge-publication badge-success">EMNLP''26</span> <span class="badge badge-pill badge-publication badge-info">First Author</span> '
abstract: >-
  Reads MHSA, FFN, and residual-stream outputs at every layer through the model's own logit lens, then compresses their entropy trajectories into a 3L-dimensional representation. The three module-wise signals provide complementary evidence for hallucination detection without storing hidden states or sampling multiple generations.
authors:
  - Bohan Yang
  - Yijun Gong
  - Zhi Zhang
  - Ge Zhang
  - Wenpeng Xing#
  - Meng Han#
links:
  Paper: https://arxiv.org/abs/2606.01033
  Project: https://tosakaucw.github.io/TriLens/
---
