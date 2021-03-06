package com.gudeng.commerce.gd.api.util;

import java.util.Random;

public class RadomUtil {

	private static final int LENGTH = 4;
	
	/** 
	* 这是典型的随机洗牌算法。 
	* 流程是从备选数组中选择一个放入目标数组中，将选取的数组从备选数组移除（放至最后，并缩小选择区域） 
	* 算法时间复杂度O(n) 
	* @return 随机8为不重复数组 
	*/
	public synchronized static String generateNumber() {
	    String no = "";
	    //初始化备选数组 
	    int[] defaultNums = new int[10];
	    for (int i = 0; i < defaultNums.length; i++) {
	        defaultNums[i] = i;
	    }

	    Random random = new Random();
	    int[] nums = new int[LENGTH];
	    //默认数组中可以选择的部分长度 
	    int canBeUsed = 10;
	    //填充目标数组 
	    for (int i = 0; i < nums.length; i++) {
	        //将随机选取的数字存入目标数组 
	        int index = random.nextInt(canBeUsed);
	        nums[i] = defaultNums[index];
	        //将已用过的数字扔到备选数组最后，并减小可选区域 
	        swap(index, canBeUsed - 1, defaultNums);
	        canBeUsed--;
	    }
	    if (nums.length > 0) {
	        for (int i = 0; i < nums.length; i++) {
	            no += nums[i];
	        }
	    }

	    return no;
	}

	
	public synchronized static String generateNumber(Integer weishu) {
	    String no = "";
	    //初始化备选数组 
	    int[] defaultNums = new int[10];
	    for (int i = 0; i < defaultNums.length; i++) {
	        defaultNums[i] = i;
	    }

	    Random random = new Random();
	    int[] nums = new int[weishu];
	    //默认数组中可以选择的部分长度 
	    int canBeUsed = 10;
	    //填充目标数组 
	    for (int i = 0; i < nums.length; i++) {
	        //将随机选取的数字存入目标数组 
	        int index = random.nextInt(canBeUsed);
	        nums[i] = defaultNums[index];
	        //将已用过的数字扔到备选数组最后，并减小可选区域 
	        swap(index, canBeUsed - 1, defaultNums);
	        canBeUsed--;
	    }
	    if (nums.length > 0) {
	        for (int i = 0; i < nums.length; i++) {
	            no += nums[i];
	        }
	    }

	    return no;
	}
	
	
	private static void swap(int i, int j, int[] nums) {
	    int temp = nums[i];
	    nums[i] = nums[j];
	    nums[j] = temp;
	}
	
	/**
	 * 获取8位数
	 * @return
	 */
	public static String generateNumber2() {
	    String no = "";
	    int num[] = new int[LENGTH];
	    int c = 0;
	    for (int i = 0; i < LENGTH; i++) {
	        num[i] = new Random().nextInt(10);
	        c = num[i];
	        for (int j = 0; j < i; j++) {
	            if (num[j] == c) {
	                i--;
	                break;
	            }
	        }
	    }
	    if (num.length > 0) {
	        for (int i = 0; i < num.length; i++) {
	            no += num[i];
	        }
	    }
	    return no;
	}

	public static void main(String[] args) {
	    for (int i = 0; i < 10; i++) {
	    	System.out.println(generateNumber()); 
	        System.out.println(generateNumber2());
	    }
	}
}
