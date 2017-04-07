package com.gudeng.commerce.gd.customer.entity.certif;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import com.gudeng.commerce.gd.customer.annotation.ExcelConf;

@Entity(name = "certif_sp_product")
public class CertifSpProductEntity  implements java.io.Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = -6857948158463216733L;

	/**
    *
    */
    private Integer id;

    *用户id
    */
    private Integer memberId;

    *用户账户
    */
    @ExcelConf(excelHeader="账号", sort = 1)
    private String account;

    *商品Id
    */
    private Integer productId;

    *商品名称
    */
    private String productName;

    *商品图片
    */
    private String productImg;

    *认证机构
    */
    private String certifOrg;

    *产品标识名称
    */
    @ExcelConf(excelHeader="产品标识名称 ", sort = 2)
    private String signs;

    *企业名称
    */
    private String companyName;

    *申请认证时间
    */
    private Date commitTime;

    *状态(0:待审核1:已认证;2:已驳回)
    */
    private String status;

    *商标
    */
    private String brand;

    *供应量
    */
    private Integer stockCount;

    *供应量单位
    */
    private String units;

    *证书编号
    */
    private String certifNo;

    *省
    */
    private Integer province;

    *市
    */
    private Integer city;

    *县
    */
    private Integer area;

    *地址
    */
    private String address;

    *专用标志图片
    */
    private String specialImg;

    *
    */
    private String createUserId;

    *
    */
    private Date createTime;

    *
    */
    private String updateUserId;

    *
    */
    private Date updateTime;

    *记录当前操作的操作员是谁，取管理后台用户的姓名
    */
	@ExcelConf(excelHeader="审核员", sort = 5)
    private String optionUser;

    *商铺名称
    */
    private String shopsName;

    @Column(name = "id")
    public Integer getId(){

    }
    public void setId(Integer id){

    }
    @Column(name = "memberId")
    public Integer getMemberId(){

    }
    public void setMemberId(Integer memberId){

    }
    @Column(name = "account")
    public String getAccount(){

    }
    public void setAccount(String account){

    }
    @Column(name = "productId")
    public Integer getProductId(){

    }
    public void setProductId(Integer productId){

    }
    @Column(name = "productName")
    public String getProductName(){

    }
    public void setProductName(String productName){

    }
    @Column(name = "productImg")
    public String getProductImg(){

    }
    public void setProductImg(String productImg){

    }
    @Column(name = "certifOrg")
    public String getCertifOrg(){

    }
    public void setCertifOrg(String certifOrg){

    }
    @Column(name = "signs")
    public String getSigns(){

    }
    public void setSigns(String signs){

    }
    @Column(name = "companyName")
    public String getCompanyName(){

    }
    public void setCompanyName(String companyName){

    }
    @Column(name = "commitTime")
    public Date getCommitTime(){

    }
    public void setCommitTime(Date commitTime){

    }
    @Column(name = "status")
    public String getStatus(){

    }
    public void setStatus(String status){

    }
    @Column(name = "brand")
    public String getBrand(){

    }
    public void setBrand(String brand){

    }
    @Column(name = "stockCount")
    public Integer getStockCount(){

    }
    public void setStockCount(Integer stockCount){

    }
    @Column(name = "units")
    public String getUnits(){

    }
    public void setUnits(String units){

    }
    @Column(name = "certifNo")
    public String getCertifNo(){

    }
    public void setCertifNo(String certifNo){

    }
    @Column(name = "province")
    public Integer getProvince(){

    }
    public void setProvince(Integer province){

    }
    @Column(name = "city")
    public Integer getCity(){

    }
    public void setCity(Integer city){

    }
    @Column(name = "area")
    public Integer getArea(){

    }
    public void setArea(Integer area){

    }
    @Column(name = "address")
    public String getAddress(){

    }
    public void setAddress(String address){

    }
    @Column(name = "specialImg")
    public String getSpecialImg(){

    }
    public void setSpecialImg(String specialImg){

    }
    @Column(name = "createUserId")
    public String getCreateUserId(){

    }
    public void setCreateUserId(String createUserId){

    }
    @Column(name = "createTime")
    public Date getCreateTime(){

    }
    public void setCreateTime(Date createTime){

    }
    @Column(name = "updateUserId")
    public String getUpdateUserId(){

    }
    public void setUpdateUserId(String updateUserId){

    }
    @Column(name = "updateTime")
    public Date getUpdateTime(){

    }
    public void setUpdateTime(Date updateTime){

    }
    @Column(name = "optionUser")
    public String getOptionUser(){

    }
    public void setOptionUser(String optionUser){

    }
    @Column(name = "shopsName")
    public String getShopsName(){

    }
    public void setShopsName(String shopsName){

    }
}