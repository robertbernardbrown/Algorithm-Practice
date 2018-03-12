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
l = LinkedList()

l.add( 'a' )
l.add( 'b' )
l.add( 'c' )

print (l)
print (l.search( 'z' ))
print (l)

#=====================================================================================================================
#LEET CODE - TWOSUM
#=====================================================================================================================

class Solution(object):
    def twoSum(self, nums, target):
        sorted(nums)
        sum = 0
        i = 1
        while nums < target:
        	if nums[i] + nums[i-1] = target:
                return [nums[i], nums[i-1]]
            return "No target met"