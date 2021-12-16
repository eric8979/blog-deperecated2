---
title: "Python operator - not"
date: "13 December 2021 18:15:00 GMT+09:00"
---

# Idea

While learning Algorithms and Data Structures I had to use `None`. While using it I found something weird so I thought it would be a helpful to learn what the keyword is more deeply.

## Weird point

The keyword `None` is an object. `type(None)` returns `<class 'NoneType'>`. Therefore no print from below if statments is reasonable.

```python
if None == False:
    print('none is false by value')
if None is False:
    print('None is false')
```

However, I found this...

```python
print(not None)
# prints True?!
```

## What is `None` and `not`

`None`: It has meaning of "absence of a value" which is similar to `null` from JavaScript.

`not`: The operand can be a Boolean expression or **any Python object**.

# Conclusion

- It turns out that `not` works similar as `bool()` method which returns `False` if operand is false or **omitted** like empty string or empty list.
  Since `None` is an empty(omitted) state, `not None` returns `True`.
- I also found that `None` is singleton which means Python creates single `None` object at runtime.

### Reference

- [python.org docs on `None`](https://docs.python.org/3.8/library/constants.html?highlight=none#None)
- [pythontutorial.net on `None`](https://www.pythontutorial.net/advanced-python/python-none/)
- [realpython.com post on `not`](https://realpython.com/python-not-operator/)
