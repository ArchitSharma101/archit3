+++
date = '2025-01-17T01:31:10+05:30'
draft = false
title = 'PyTorch Fundamentals'
+++

## Importing PyTorch
Let's start by importing PyTorch and checking the version we're using.
```
import torch
torch.__version__
```
```
2.5.1+cu121
```
It looks like we've got PyTorch 2.5.1+.


---


## Introduction to Tensors
Tensors are multi-dimensional arrays with a uniform type. In machine learning,
the term tensor informally refers to two different concepts :
1. a way of organizing data and 
2. a multilinear (tensor) transformation.
Data may be organized in a multidimensional array (M-way array).

For example, you could represent an image as a tensor with shape `[3, 224, 224]` 
which could mean `[colour_channels, height, width]`. Thus, the tensor would have 
dimensions.

For a detailed explanation of tensors, you can refer to a video by Dan Fleisch: 
[What's a Tensor?](https://www.youtube.com/watch?v=f5liqUk0ZTw).


## Creating Tensors
There is a whole documentation page for the [`torch.Tensor`](https://pytorch.org/docs/stable/tensors.html) class.

Let's see a few of the data types which can be defined as :

`torch.float32` or `torch.float` for 32-bit floating point

`torch.float64` or `torch.double` for 64-bit floating point

`torch.complex64` or `torch.cfloat` for 64-bit complex point