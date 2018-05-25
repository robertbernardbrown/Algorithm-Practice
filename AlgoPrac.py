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

def selectionSort(alist):
	for reverseLoop in range(len(alist)-1,0,-1):
		print("reverseLoop", reverseLoop, alist[reverseLoop])
		positionOfMax=0
		print("positionMax", positionOfMax, alist[positionOfMax])
		for location in range(1,reverseLoop+1):
			print("location", location, alist[location])
			if alist[location]>alist[positionOfMax]:
				positionOfMax = location
				print("positionMax2", positionOfMax, alist[positionOfMax])
		temp = alist[reverseLoop]
		print("temp", reverseLoop, temp)
		alist[reverseLoop] = alist[positionOfMax]
		print("alist at reverseLoop", alist[reverseLoop])
		alist[positionOfMax] = temp
		print("alist at positionOfMax", alist[positionOfMax])
		print(alist)
	print(alist)

selectionSort(arrayUse)