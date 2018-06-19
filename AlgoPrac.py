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

# def selectionSort(alist):
# 	for outerLoop in range(len(alist)-1, 0, -1):
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

# def selectionSort(alist):
# 	for outerLoop in range(len(alist) - 1, 0, -1):
# 		maxRef = 0
# 		for innerLoop in range(0, outerLoop + 1):
# 			if alist[innerLoop] > alist[maxRef]:
# 				maxRef = innerLoop
# 		temp = alist[outerLoop]
# 		alist[outerLoop] = alist[maxRef]
# 		alist[maxRef] = temp
# 	print(alist)

# selectionSort(arrayUse)

# def selectionSort(alist):
# 	for outerLoop in range(len(alist) - 1, 0, -1):
# 		maxRef = 0
# 		for innerLoop in range(0, outerLoop + 1):
# 			if alist[maxRef] < alist[innerLoop]:
# 				maxRef = innerLoop
# 		temp = alist[outerLoop]
# 		alist[outerLoop] = alist[maxRef]
# 		alist[maxRef] = temp
# 	print(alist)

# selectionSort(arrayUse)

# def selectionSort(alist):
# 	for outerLoop in range(len(alist) -1, 0, -1):
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
# 	for outerLoop in range(len(alist) - 1, 0, -1):
# 		maxRef = 0
# 		for innerLoop in range(0, outerLoop + 1):
# 			if alist[innerLoop] > alist[maxRef]:
# 				maxRef = innerLoop
# 		temp = alist[maxRef]
# 		alist[maxRef] = alist[outerLoop]
# 		alist[outerLoop] = temp
# 	print(alist)

# selectionSort(arrayUse)

# def selectionSort(alist):
# 	for outerLoop in range(len(alist) - 1, 0, -1):
# 		maxRef = 0
# 		for innerLoop in range(0, outerLoop + 1):
# 			if alist[innerLoop] > alist[maxRef]:
# 				maxRef = innerLoop
# 		temp = alist [outerLoop]
# 		alist[outerLoop] = alist[maxRef]
# 		alist[maxRef] = temp
# 	print(alist)

# selectionSort(arrayUse)

# def selectionSort(alist):
# 	for outerLoop in range(len(alist) -1, 0, -1):
# 		maxRef = 0
# 		for innerLoop in range(0, outerLoop+1):
# 			if alist[maxRef] < alist[innerLoop]:
# 				maxRef = innerLoop
# 		temp = alist[maxRef]
# 		alist[maxRef] = alist[outerLoop]
# 		alist[outerLoop] = temp
# 	print(alist)

# def selectionSort(alist):
# 	for outerLoop in range(len(alist) -1, 0, -1):
# 		maxRef = 0
# 		for innerLoop in range(0, outerLoop+1):
# 			if alist[maxRef] < alist[innerLoop]:
# 				maxRef = innerLoop
# 		temp = alist[maxRef]
# 		alist[maxRef] = alist[outerLoop]
# 		alist[outerLoop] = temp
# 	print(alist)

# selectionSort(arrayUse)

def selectionSort(alist):
	for outerLoop in range(len(alist)-1, 0, -1):
		maxRef = 0
		for innerLoop in range(0, outerLoop+1):
			if alist[maxRef] < alist[innerLoop]:
				maxRef = innerLoop
			temp = alist[maxRef]
			alist[maxRef] = alist[outerLoop]
			alist[outerLoop] = temp
	return alist

# selectionSort(arrayUse)
# print(arrayUse)

#=====================================================================================================================
#HEAP
#=====================================================================================================================

class BinHeap:
	def __init__(self):
		self.heapList = []
		self.currentSize = 0
	def percUp(self, i):
		while i // 2 > 0:
			if self.heapList[i] < self.heapList[i // 2]:
				tmp = self.heapList[i // 2]
				self.heapList[i // 2] = self.heapList[i]
				self.heapList[i] = tmp
			i = i // 2
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

# bh = BinHeap()
# bh.buildHeap(arrayUse)

# bh.insert(46)
# bh.insert(-444)
# print(bh.heapList)
# print(bh.minChild)

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

class binHeap4:
	def __init__(self):
		self.heap = [0]
		self.heapSize = 0
	def percUp(self, i):
		while i // 2 > 0:
			if self.heap[i] < self.heap[i//2]:
				temp = self.heap[i]
				self.heap[i] = self.heap[i//2]
				self.heap[i//2] = temp
			i = i // 2
	def insert(self, i):
		self.heap.append(i)
		self.heapSize += 1
		self.percUp(self.heapSize)
	def percDown(self, i):
		while i * 2 <= self.heapSize:
			mc = self.minChild(i)
			if self.heap[mc] < self.heap[i]:
				temp = self.heap[mc]
				self.heap[mc] = self.heap[i]
				self.heap[i] = temp
			i = mc
	def minChild(self, i):
		if i * 2 + 1 > self.heapSize:
			return i * 2
		else:
			if self.heap[i*2] < self.heap[i*2+1]:
				return i * 2
			else:
				return i * 2 + 1
	def delMin(self):
		retVal = self.heap[1]
		self.heap[1] = self.heap[self.heapSize]
		self.heapSize = self.heapSize - 1
		self.heap.pop()
		self.percDown(1)
		return retVal
	def buildHeap(self, alist):
		i = len(alist)//2
		self.heap = [0] + alist[:]
		self.heapSize = len(alist)
		while i > 0:
			self.percDown(i)
			i = i - 1
		return self.heapSize

# bh = binHeap4()
# bh.insert(2)
# bh.insert(3)
# bh.insert(80)
# bh.insert(-1)
# print("heap", bh.heap)
# bh.delMin()
# print("heap2", bh.heap)
# list2 = [33, -2, 4, 7890]
# bh.buildHeap(list2)
# print("heap3", bh.heap)


#=====================================================================================================================
#HASH TABLE
#=====================================================================================================================

def hash(astring, tablesize):
    sum = 0
    for pos in range(len(astring)):
        sum = sum + ord(astring[pos])

    return sum%tablesize

class HashTable:
	def __init__(self):
		self.size = 11
		self.slots = [None] * self.size
		self.data = [None] * self.size
	def put(self,key,data):
		hashvalue = self.hashfunction(key,len(self.slots))
		if self.slots[hashvalue] == None:
			self.slots[hashvalue] = key
			self.data[hashvalue] = data
		else:
			if self.slots[hashvalue] == key:
				self.data[hashvalue] = data  #replace
			else:
				nextslot = self.rehash(hashvalue,len(self.slots))
				while self.slots[nextslot] != None and self.slots[nextslot] != key:
					nextslot = self.rehash(nextslot,len(self.slots))
				if self.slots[nextslot] == None:
					self.slots[nextslot]=key
					self.data[nextslot]=data
				else:
					self.data[nextslot] = data #replace
	def hashfunction(self,key,size):
		return key%size
	def rehash(self,oldhash,size):
		return (oldhash+1)%size
	def get(self,key):
		startslot = self.hashfunction(key,len(self.slots))
		data = None
		stop = False
		found = False
		position = startslot
		while self.slots[position] != None and not found and not stop:
			if self.slots[position] == key:
				found = True
				data = self.data[position]
			else:
				position=self.rehash(position,len(self.slots))
				if position == startslot:
					stop = True
		return data
	def __getitem__(self,key):
		return self.get(key)
	def __setitem__(self,key,data):
		self.put(key,data)

# H=HashTable()
# H[54]="cat"
# H[26]="dog"
# H[93]="lion"
# H[17]="tiger"
# H[77]="bird"
# H[31]="cow"
# H[44]="goat"
# H[55]="pig"
# H[20]="chicken"
# print(H.slots)
# # [77, 44, 55, 20, 26, 93, 17, None, None, 31, 54]
# print(H.data)
# # ['bird', 'goat', 'pig', 'chicken', 'dog', 'lion','tiger', None, None, 'cow', 'cat']
# del H.slots[0]
# print('slots: ', H.slots)
# print('data: ', H.data)
# print(H[20])
# # 'chicken'
# print(H[17])
# # 'tiger'
# H[20]='duck'
# print(H[20])
# # 'duck'
# print(H.data)
# # ['bird', 'goat', 'pig', 'duck', 'dog', 'lion',
# #        'tiger', None, None, 'cow', 'cat']
# print(H[99])
# # None

#=====================================================================================================================
#DIFFERENT HASH TABLE
#=====================================================================================================================


class HashMap:
	def __init__(self):
		self.size = 6
		self.map = [None] * self.size
		
	def _get_hash(self, key):
		hash = 0
		for char in str(key):
			hash += ord(char)
		return hash % self.size
		
	def add(self, key, value):
		key_hash = self._get_hash(key)
		key_value = [key, value]
		
		if self.map[key_hash] is None:
			self.map[key_hash] = list([key_value])
			return True
		else:
			for pair in self.map[key_hash]:
				if pair[0] == key:
					pair[1] = value
					return True
			self.map[key_hash].append(key_value)
			return True
			
	def get(self, key):
		key_hash = self._get_hash(key)
		if self.map[key_hash] is not None:
			for pair in self.map[key_hash]:
				if pair[0] == key:
					return pair[1]
		return None
			
	def delete(self, key):
		key_hash = self._get_hash(key)
		
		if self.map[key_hash] is None:
			return False
		for i in range (0, len(self.map[key_hash])):
			if self.map[key_hash][i][0] == key:
				self.map[key_hash].pop(i)
				return True
		return False
			
	def printIt(self):
		print('---PHONEBOOK----')
		for item in self.map:
			if item is not None:
				print(str(item))


class HashMap2:
	def __init__(self):
		self.mapSize = 6
		self.map = [None] * self.mapSize
	def _get_hash(self, key):
		hash = 0
		for char in str(key):
			hash += ord(char)
		return hash % self.mapSize
	def add(self, key, value):
		key_hash = self._get_hash(key)
		key_value = [key, value]
		if self.map[key_hash] is None:
			self.map[key_hash] = list([key_value])
			return True
		else:
			for pair in self.map[key_hash]:
				if pair[0] == key:
					pair[1] = value
					return True
			self.map[key_hash].append(key_value)
			return True
	def get(self, key):
		key_hash = self._get_hash(key)
		if self.map[key_hash] is not None:
			for pair in self.map[key_hash]:
				if pair[0] == key:
					return pair[1]
		return None
	def delete(self, key):
		key_hash = self._get_hash(key)
		if self.map[key_hash] is None:
			return False
		for i in range(0, len(self.map[key_hash])):
			if self.map[key_hash][i][0] == key:
				self.map[key_hash].pop(i)
				return True
		return False
	def printHash(self):
		for item in self.map:
			if item is not None:
				print(str(item))

# h = HashMap2()
# h.add('Bob', '567-8888')
# h.add('Ming', '293-6753')
# h.add('Ming', '333-8233')
# h.add('Ankit', '293-8625')
# h.add('Aditya', '852-6551')
# h.add('Alicia', '632-4123')
# h.add('Mike', '567-2188')
# h.printHash()		
# h.delete('Bob')
# h.add('Aditya', '777-8888')
# h.printHash()
# print('Ming: ', h.get('Ming'))
# print(h.get('Ankit'))

#=====================================================================================================================
#MERGE SORT
#=====================================================================================================================

def mergeSort(alist):
    print("Splitting ",alist)
    if len(alist)>1:
        mid = len(alist)//2
        lefthalf = alist[:mid]
        righthalf = alist[mid:]
        mergeSort(lefthalf)
        mergeSort(righthalf)
        i=0
        j=0
        k=0
        while i < len(lefthalf) and j < len(righthalf):
            if lefthalf[i] < righthalf[j]:
                alist[k]=lefthalf[i]
                i=i+1
            else:
                alist[k]=righthalf[j]
                j=j+1
            k=k+1
        while i < len(lefthalf):
            alist[k]=lefthalf[i]
            i=i+1
            k=k+1
        while j < len(righthalf):
            alist[k]=righthalf[j]
            j=j+1
            k=k+1
    print("Merging ",alist)

import time
import random

# data = range(0, 100000)
# random.shuffle(data)

t0 = time.time()
alist = [54,26,93,17,77,31,44,55,20]
# mergeSort(alist)
print(alist)
t1 = time.time()

total = t1-t0

def mergeSort2(alist):
	if len(alist) > 1:
		mid = len(alist)//2
		left = alist[:mid]
		right = alist[mid:]
		mergeSort2(left)
		mergeSort2(right)
		i = 0
		j = 0
		k = 0
		while i < len(left) and j < len(right):
			if left[i] < right[j]:
				alist[k] = left[i]
				i = i + 1
			else:
				alist[k] = right[j]
				j = j + 1
			k = k + 1
		while i < len(left):
			alist[k] = left[i]
			i = i + 1
			k = k + 1
		while j < len(right):
			alist[k] = right[j]
			j = j + 1
			k = k + 1

mergeSort2(alist)
print(alist)

#=====================================================================================================================
#QUICKSORT
#=====================================================================================================================

def quickSort(alist):
	quickSortHelper(alist,0,len(alist)-1)
def quickSortHelper(alist,first,last):
	print("quicksort", alist, first, last)
	if first<last:
		splitpoint = partition(alist,first,last)
		quickSortHelper(alist,first,splitpoint-1)
		quickSortHelper(alist,splitpoint+1,last)
def partition(alist,first,last):
   print("partition", alist, first, last)
   pivotvalue = alist[first]
   leftmark = first+1
   rightmark = last
   done = False
   while not done:
       while leftmark <= rightmark and alist[leftmark] <= pivotvalue:
           leftmark = leftmark + 1
       while alist[rightmark] >= pivotvalue and rightmark >= leftmark:
           rightmark = rightmark -1
       if rightmark < leftmark:
           done = True
       else:
           temp = alist[leftmark]
           alist[leftmark] = alist[rightmark]
           alist[rightmark] = temp
   temp = alist[first]
   alist[first] = alist[rightmark]
   alist[rightmark] = temp
   return rightmark



def quickSort2(alist):
	quickSortHelper2(alist, 0, len(alist)-1)

def quickSortHelper2(alist, first, last):
	if first < last:
		split = partition2(alist, first, last)
		quickSortHelper2(alist, first, split-1)
		quickSortHelper2(alist, split+1, last)

def partition2(alist, first, last):
	pivot = alist[first]
	left = first+1
	right = last
	done = False
	while not done:
		while left <= right and alist[left] <= pivot:
			left = left + 1
		while right >= left and alist[right] >= pivot:
			right = right - 1
		if left > right:
			done = True
		else:
			temp = alist[left]
			alist[left] = alist[right]
			alist[right] = temp
	temp = alist[first]
	alist[first] = alist[right]
	alist[right] = temp
	return right
	

alist = [2,4,3,1]
quickSort2(alist)
print("quick: ", alist)

# I would classify the following data structures as **must know**
# ============================================================================
# Linked List - Single and Doubly
# Stack
# Queues
# Binary Search Trees or general Binary Tree
# Heaps
# Basic Graph Traversal and Shortest Path
# Hashing

# Following data structures may be asked. I would say that their probability of being asked is between 50 to 75% -
# ============================================================================
# Tries
# Advance Graphs like flow and min-cut etc.
# Bit Manipulation
# You will probably crack interviews with sufficient knowledge of above.

# Following have very low probability of being asked ( < 25%) :
# ============================================================================
# Segment Trees / Binary Indexed Trees
# AVL Trees
# B+ Trees
# Other hard data structures are absolutely unnecessary.

# Following Algorithms / Tricks / Topics may also be important :
# ============================================================================
# Memory Management
# Basic Co-ordinate geometry - Manhattan Distance, Closest Point Pair
# Divide and Conquer
# Greedy
# Dynamic Programming - Extremely important
# Probability and basic Number Theory
# Sorting and Searching

# Following topics is important for Knowledge / Experience based questions :
# ============================================================================
# OS - Threads, Processes and Locks using Mutex, Semaphores (Operating systems Archives - GeeksforGeeks)
# Scalability Issues, RPCs, Rate limiter, etc.
# OOP Concepts
# Databases - SQL, NoSQL, Writing simple Queries, Transactions, ACID
# Linux Commands - sed, grep, ps, etc.