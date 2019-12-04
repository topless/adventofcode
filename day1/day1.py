from math import floor


def calc(num):
  return floor(num / 3) - 2


sum = 0

with open('day1/input.txt') as f:
  for line in f:
    res = int(line)
    while res > 0:
      res = calc(res)
      if res > 0:
        sum += res

print(int(sum))

