n = int(input())

TABLE_ROW = 100
TABLE_COL = 100

table = [[0 for i in range(TABLE_COL)] for j in range(TABLE_ROW)]

while n != 0:
  n -= 1
  x, y = map(int, input().split())
  for i in range(x, x+10):
    for j in range(y, y+10):
      table[i][j] = 1

sum = 0
for line in table:
  for number in line:
    sum += number

print(sum)