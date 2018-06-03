arrayUse = [-33, 900, 5, 22, 20, -5, 17, 55, 52, 5]

#=====================================================================================================================
#LINKED LIST (DOUBLE)
#=====================================================================================================================

class Node :
	def __init__( self, data ) :
		self.data = data
		self.next = None
		self.prev = None

class LinkedList :
	def __init__( self ) :
		self.head = None		

	def add( self, data ) :
		node = Node( data )
		if self.head == None :	
			self.head = node
		else :
			node.next = self.head
			node.next.prev = node						
			self.head = node			

	def search( self, k ) :
		p = self.head
		if p != None :
			while p.next != None :
				if ( p.data == k ) :
					return p				
				p = p.next
			if ( p.data == k ) :
				return p
		return None

	def remove( self, p ) :
		tmp = p.prev
		p.prev.next = p.next
		p.prev = tmp		

	def __str__( self ) :
		s = ""
		p = self.head
		if p != None :		
			while p.next != None :
				s += p.data
				p = p.next
			s += p.data
		return s

# example code
# l = LinkedList()

# l.add( 'a' )
# l.add( 'b' )
# l.add( 'c' )

# print (l)
# print (l.search( 'z' ))
# print (l)

#=====================================================================================================================
#SELECTION SORT
#=====================================================================================================================

arrayUse = [-33, 900, 5, 22, 20, -5, 17, 55, 52, 5]

# def selectionSort(alist):
# 	for reverseLoop in range(len(alist)-1,0,-1):
# 		print("reverseLoop", reverseLoop, alist[reverseLoop])
# 		positionOfMax=0
# 		print("positionMax", positionOfMax, alist[positionOfMax])
# 		for location in range(1,reverseLoop+1):
# 			print("location", location, alist[location])
# 			if alist[location]>alist[positionOfMax]:
# 				positionOfMax = location
# 				print("positionMax2", positionOfMax, alist[positionOfMax])
# 		temp = alist[reverseLoop]
# 		print("temp", reverseLoop, temp)
# 		alist[reverseLoop] = alist[positionOfMax]
# 		print("alist at reverseLoop", alist[reverseLoop])
# 		alist[positionOfMax] = temp
# 		print("alist at positionOfMax", alist[positionOfMax])
# 		print(alist)
# 	print(alist)


# def selectionSort(alist):
# 	for outerLoop in range(len(alist)-1, 0, -1):
# 		maxNum = 0
# 		for innerLoop in range(0, outerLoop+1):
# 			if alist[maxNum] < alist[innerLoop]:
# 				maxNum = innerLoop
# 		temp = alist[maxNum]
# 		alist[maxNum] = alist[outerLoop]
# 		alist[outerLoop] = temp
# 	print(alist)

# selectionSort(arrayUse)

# def selectionSort(alist):
# 	for outerLoop in range(len(alist)-1,0,-1):
# 		maxRef = 0
# 		for innerLoop in range(0, outerLoop+1):
# 			if alist[maxRef] < alist[innerLoop]:
# 				maxRef = innerLoop
# 		temp = alist[outerLoop]
# 		alist[outerLoop] = alist[maxRef]
# 		alist[maxRef] = temp
# 	print(alist)

# selectionSort(arrayUse)

# def selectionSort(alist):
# 	for outerLoop in range(len(alist)-1, 0, -1):
# 		maxRef = 0
# 		for innerLoop in range(0, outerLoop+1):
# 			if alist[maxRef] < alist[innerLoop]:
# 				maxRef = innerLoop
# 		temp = alist[maxRef]
# 		alist[maxRef] = alist[outerLoop]
# 		alist[outerLoop] = temp
# 	print(alist)

# selectionSort(arrayUse)

# def selectionSort (alist):
# 	for outerLoop in range(len(alist) -1, 0, -1):
# 		maxRef = 0
# 		for innerLoop in range(0, outerLoop +1):
# 			if alist[innerLoop] > alist[maxRef]:
# 				maxRef = innerLoop
# 		temp = alist[outerLoop]
# 		alist[outerLoop] = alist[maxRef]
# 		alist[maxRef] = temp
# 	print(alist)

# selectionSort(arrayUse)

#=====================================================================================================================
#HEAP
#=====================================================================================================================

class BinHeap:
	def __init__(self):
		self.heapList = []
		self.currentSize = 0
	def percUp(self, i):
		print(self.heapList)
		print("size of array: ", i)
		print("size of array//2: ", i//2)
		while i // 2 > 0:
			print("index at size: ", self.heapList[i], "index at half size: ", self.heapList[i // 2])
			if self.heapList[i] < self.heapList[i // 2]:
				tmp = self.heapList[i // 2]
				self.heapList[i // 2] = self.heapList[i]
				self.heapList[i] = tmp
				print("heapList after swap: ", self.heapList) 
			i = i // 2
			print("new i: ", i)
	def insert(self, k):
		self.heapList.append(k)
		self.currentSize = self.currentSize + 1
		self.percUp(self.currentSize)
	def percDown(self,i):
		while (i * 2) <= self.currentSize:
			mc = self.minChild(i)
			if self.heapList[i] > self.heapList[mc]:
				tmp = self.heapList[i]
				self.heapList[i] = self.heapList[mc]
				self.heapList[mc] = tmp
			i = mc
	def minChild(self,i):
		if i * 2 + 1 > self.currentSize:
			return i * 2
		else:
			if self.heapList[i*2] < self.heapList[i*2+1]:
				return i * 2
			else:
				return i * 2 + 1
	def delMin(self):
		retval = self.heapList[1]
		self.heapList[1] = self.heapList[self.currentSize]
		self.currentSize = self.currentSize - 1
		self.heapList.pop()
		self.percDown(1)
		return retval
	def buildHeap(self,alist):
		i = len(alist) // 2
		self.currentSize = len(alist)
		self.heapList = [0] + alist[:]
		while (i > 0):
			self.percDown(i)
			i = i - 1
		return self.currentSize

bh = BinHeap()
bh.buildHeap(arrayUse)

bh.insert(46)
bh.insert(-444)
print(bh.heapList)
print(bh.minChild)

# class BinHeap:
# 	def _init_ (self):
# 		self.heap = []
# 		self.heapSize = 0

# class BinHeap:
# 	def _init_ (self):
# 		self.heap = []
# 		self.size = 0
	
# class BinHeap:
# 	def _init_ (self):
# 		self.heap = [0]
# 		self.size = 0
# 	def percUp (self, i):
# 		while i // 2 > 0:
# 			if self.heap[i] < self.heap[i//2]:
# 				temp = self.heap[i//2]
# 				self.heap[i//2] = self.heap[i]
# 				self.heap[i] = temp
# 			i = i // 2


#=====================================================================================================================
#HASH TABLE
#=====================================================================================================================
