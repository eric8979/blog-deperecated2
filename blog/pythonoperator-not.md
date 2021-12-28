---
title: "Python operator - not"
date: "13 December 2021 18:15:00 GMT+09:00"
---

![test img](https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80)

## Idea

While learning Algorithms and Data Structures I had to use `None`. While using it I found something weird so I thought it would be a helpful to learn what the keyword is more deeply.

## Weird point

The keyword `None` is an object. `type(None)` returns `<class 'NoneType'>`. Therefore no print from below if statments is reasonable.

```python3
if None == False:
    print('none is false by value')
if None is False:
    print('None is false')
```

However, I found this...

```python3
print(not None)
# prints True?!
```

## What is `None` and `not`

`None`: It has meaning of "absence of a value" which is similar to `null` from JavaScript.

`not`: The operand can be a Boolean expression or **any Python object**.

## Conclusion

- It turns out that `not` works similar as `bool()` method which returns `False` if operand is false or **omitted** like empty string or empty list.
  Since `None` is an empty(omitted) state, `not None` returns `True`.
- I also found that `None` is singleton which means Python creates single `None` object at runtime.

### Reference

- [python.org docs on `None`](https://docs.python.org/3.8/library/constants.html?highlight=none#None)
- [pythontutorial.net on `None`](https://www.pythontutorial.net/advanced-python/python-none/)
- [realpython.com post on `not`](https://realpython.com/python-not-operator/)
