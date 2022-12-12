# Your puzzle input is 273025-767253.

begin = 273025
end = 767253

def is_valid(password):
  digits = [int(d) for d in str(password)]

  if len(digits) <= len(set(digits)):
    return False
  if len(digits) != 6:
    return False
  if digits != sorted(digits):
    return False
  for d in set(digits):
    if digits.count(d) == 2:
      return True
  return False


valid = 0
for password in range(begin, end):
  if is_valid(password):
    valid += 1

print("Number of valid passwords %d" % valid)
