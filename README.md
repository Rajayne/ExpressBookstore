# ExpressBookstore

Adding validation for book objects which should look like:

```
{
  "isbn": "0691161518",
  "amazon_url": "http://a.co/eobPtX2",
  "author": "Matthew Lane",
  "language": "english",
  "pages": 264,
  "publisher": "Princeton University Press",
  "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
  "year": 2017
}
```

# Part One

1. Create database and run data.sql
2. Use JSONSchema to validate creating/updating books
3. Display validation errors if routes fail
