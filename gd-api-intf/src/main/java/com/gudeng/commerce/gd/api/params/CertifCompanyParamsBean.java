package com.gudeng.commerce.gd.api.params;

import java.util.Date;

public class CertifCompanyParamsBean  implements java.io.Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 5315053200663690027L;

	/**
    *
    */
    private Integer id;

    *会员ID
    */
    private Integer memberId;

    *账号
    */
    private String account;

    *企业名称
    */
    private String companyName;

    *营业执照号码
    */
    private String bzl;

    *营业执照图片
    */
    private String bzlPhotoUrl;

    *提交时间
    */
    private Date commitTime;

    *状态(0:待审核1:已认证;2:已驳回)
    */
    private String status;

    *app类型，记录属于哪个app或者客户端提交的认证。
            1为农批商，2为农商友，3为农速通，4为供应商，5为谷登农批web
    */
    private Integer appType;

    *记录产生的时间
    */
    private Date createTime;

    *记录最新的更新时间
    */
    private Date updateTime;

    *
    */
    private String createUserId;

    *
    */
    private String updateUserId;

    *记录当前操作的操作员是谁，取管理后台用户的姓名
    */
    private String optionUser;

    *企业法人姓名
    */
    private String realName;

    *法人身份证号
    */
    private String idCard;

    *法人身份证图片, 逗号分隔
    */
    private String cardPhotoUrl;

    *头像
    */
    private String icon;


    }
    public void setId(Integer id){

    }
    public Integer getMemberId(){

    }
    public void setMemberId(Integer memberId){

    }
    public String getAccount(){

    }
    public void setAccount(String account){

    }
    public String getCompanyName(){

    }
    public void setCompanyName(String companyName){

    }
    public String getBzl(){

    }
    public void setBzl(String bzl){

    }
    public String getBzlPhotoUrl(){

    }
    public void setBzlPhotoUrl(String bzlPhotoUrl){

    }
    public Date getCommitTime(){

    }
    public void setCommitTime(Date commitTime){

    }
    public String getStatus(){

    }
    public void setStatus(String status){

    }
    public Integer getAppType(){

    }
    public void setAppType(Integer appType){

    }
    public Date getCreateTime(){

    }
    public void setCreateTime(Date createTime){

    }
    public Date getUpdateTime(){

    }
    public void setUpdateTime(Date updateTime){

    }
    public String getCreateUserId(){

    }
    public void setCreateUserId(String createUserId){

    }
    public String getUpdateUserId(){

    }
    public void setUpdateUserId(String updateUserId){

    }
    public String getOptionUser(){

    }
    public void setOptionUser(String optionUser){

    }
    public String getRealName(){

    }
    public void setRealName(String realName){

    }
    public String getIdCard(){

    }
    public void setIdCard(String idCard){

    }
    public String getCardPhotoUrl(){

    }
    public void setCardPhotoUrl(String cardPhotoUrl){

    }
    public String getIcon(){

    }
    public void setIcon(String icon){

    }
	@Override
	public String toString() {
		return "CertifCompanyParamsBean [id=" + id + ", memberId=" + memberId + ", account=" + account
				+ ", companyName=" + companyName + ", bzl=" + bzl + ", bzlPhotoUrl=" + bzlPhotoUrl + ", commitTime="
				+ commitTime + ", status=" + status + ", appType=" + appType + ", createTime=" + createTime
				+ ", updateTime=" + updateTime + ", createUserId=" + createUserId + ", updateUserId=" + updateUserId
				+ ", optionUser=" + optionUser + ", realName=" + realName + ", idCard=" + idCard + ", cardPhotoUrl="
				+ cardPhotoUrl + ", icon=" + icon + "]";
	}
    
}