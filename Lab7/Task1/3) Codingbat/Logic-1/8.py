def in1to10(n, outside_mode):
  if(outside_mode == False):
    if(1 <= n <= 10):
      return True
    return False
  elif(outside_mode == True):
    if(n <= 1 or n >= 10):
      return True
    return False
  else:
    return False
