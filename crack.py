words = open('WordList.txt', 'r')
valid_handles = sorted([word.replace('at', '@').rstrip() for word in words if 'at' in word[:2] if "'" not in word], lambda x,y: cmp(len(x), len(y)))
print 'Short handles'
for i in range(0, 20):
  print valid_handles[i] + ' : ' + valid_handles[i].replace('@', 'at')

print '\nLong handles'
for i in range(0, 20):
  i += 1
  print valid_handles[-i] + ' : ' + valid_handles[-i].replace('@', 'at')
