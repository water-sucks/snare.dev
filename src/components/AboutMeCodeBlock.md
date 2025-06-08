```haskell
data Person = Person {
  name :: String,
  desc :: String,
  occupation :: [String],
  resume :: String,
  contact :: [(String, String)]
} deriving (Show)

me :: Person -- I think?
me = Person {
  name = "Varun Narravula",
  desc = "Aspiring, but never achieving.",
  occupation = [
    "drums",
    "programming"
    -- TODO: "writing"
    -- many more...
  ],
  work = "ANDYL <https://andyl.com>",
  resume = "curl https://snare.dev/resume.pdf",
  contact = [
    ("Email", "varun@snare.dev"),
    ("Matrix", "@water-sucks:matrix.org"),
    ("Discord", "@water.sucks")
  ]
}

main :: IO ()
main = print me
```
