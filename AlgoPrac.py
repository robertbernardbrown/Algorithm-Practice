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

def selectionSort(alist):
	for fillslot in range(len(alist)-1,0,-1):
		positionOfMax=0
		for location in range(1,fillslot+1):
			if alist[location]>alist[positionOfMax]:
				positionOfMax = location
		temp = alist[fillslot]
		alist[fillslot] = alist[positionOfMax]
		alist[positionOfMax] = temp
	print(alist)

selectionSort(arrayUse)



