def date_fashion(you, date):
  result = 0
  if(you <= 2 or date <= 2):
    result = 0
  elif(you >= 8 or date >= 8):
    result = 2
  else:
    result = 1
  return result
