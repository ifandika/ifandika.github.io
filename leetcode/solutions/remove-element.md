# Leetcode Solutions
## Leetcode 27. Remove Element
> Easy Level

#### Java
```java
public class Main {
  public int removeElement(int[] nums, int val) {
    int indx = 0;
    for(int i=0; i<nums.length; i++) {
      if(nums[i] != val) {
        nums[indx++] = nums[i];
      }
    }
    return indx;
  }
}
```
Contoh 1:
Input
> 

Output
> 10
