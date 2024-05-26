
import java.util.*;
public class k{
    public static int[] Klargest(int[] a, int k, int n) {
        // Write your code here
     Scanner sc =new Scanner(System.in);
     int  t=sc.nextInt();
     int result[]= new int[k];
     int index=0;

     while(t-->0){
           Arrays.sort(a);
            for(int i=a.length-k;i<a.length;i++){
                result[index++]=a[i];
            }
           
     }
     return result;
       
       

    }

    public static void main(String[] args) {
        int arr[]={1,4,3,54,5,7};
        int k=2;
        int n=6;
        int []r=Klargest(arr, k, n);
        System.out.println(r);

    }
}