## Leetcode Solutions



### Easy
## Leetcode 27. Remove Element

#### Java
```java
class Solution {
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
#### Output
> 10
