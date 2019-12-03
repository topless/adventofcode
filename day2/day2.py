
def check(data):
  if data[0] == 19690720:
    print("Found noun, verb {}, {}".format(data[1], data[2]))
    res = 100 * data[1] + data[2]
    print("The 100 * noun * verb is {}".format(res))

def load_data():
  with open('input.txt') as f:
    file_read = f.read().split(',')
  return map(int, file_read)

def run_program(noun, verb):
  data = load_data()
  data[1] = noun
  data[2] = verb

  step = 4
  pointer = 0

  while True:
    op_code = data[pointer]
    if op_code == 99:
      check(data)
      break

    addr_param_a = data[pointer + 1]
    addr_param_b = data[pointer + 2]
    addr_result = data[pointer + 3]

    if op_code == 1:
      data[addr_result] = data[addr_param_a] + data[addr_param_b]
    elif op_code == 2:
      data[addr_result] = data[addr_param_a] * data[addr_param_b]
    else:
      check(data)
      break
    pointer += step


def main():
  for noun in range(100):
    for verb in range(100):
      run_program(noun, verb)

main()
