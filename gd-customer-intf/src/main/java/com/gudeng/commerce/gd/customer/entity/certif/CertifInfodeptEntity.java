package com.gudeng.commerce.gd.customer.entity.certif;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "certif_infodept")
public class CertifInfodeptEntity  implements java.io.Serializable{
    /**
    *
    */
    private Integer id;
    /**
    *用户id
    */
    private Integer memberId;
    /**
    *账号
    */
    private String account;
    /**
    *姓名
    */
    private String realName;
    /**
    *企业名称
    */
    private String companyName;
    /**
    *所属区域
    */
    private String areaInfo;
    /**
    *身份证号
    */
    private String idCard;
    /**
    *营业执照/门头照/名片照片
    */
    private String bzlPhotoUrl;
    /**
    *身份证图片, 逗号分隔
    */
    private String cardPhotoUrl;
    /**
    *头像
    */
    private String icon;
    /**
    *认证状态(0:待审核1:已认证;2:已驳回)
    */
    private String status;
    /**
    *申请认证时间
    */
    private Date commitTime;
    /**
    *
    */
    private String createUserId;
    /**
    *
    */
    private Date createTime;
    /**
    *
    */
    private String updateUserId;
    /**
    *
    */
    private Date updateTime;
    /**
    *记录当前操作的操作员是谁，取管理后台用户的姓名
    */
    private String optionUser;
    @Id
    @Column(name = "id")
    public Integer getId(){
        return this.id;
    }
    public void setId(Integer id){
        this.id = id;
    }
    @Column(name = "memberId")
    public Integer getMemberId(){
        return this.memberId;
    }
    public void setMemberId(Integer memberId){
        this.memberId = memberId;
    }
    @Column(name = "account")
    public String getAccount(){
        return this.account;
    }
    public void setAccount(String account){
        this.account = account;
    }
    @Column(name = "realName")
    public String getRealName(){
        return this.realName;
    }
    public void setRealName(String realName){
        this.realName = realName;
    }
    @Column(name = "companyName")
    public String getCompanyName(){
        return this.companyName;
    }
    public void setCompanyName(String companyName){
        this.companyName = companyName;
    }
    @Column(name = "areaInfo")
    public String getAreaInfo(){
        return this.areaInfo;
    }
    public void setAreaInfo(String areaInfo){
        this.areaInfo = areaInfo;
    }
    @Column(name = "idCard")
    public String getIdCard(){
        return this.idCard;
    }
    public void setIdCard(String idCard){
        this.idCard = idCard;
    }
    @Column(name = "bzlPhotoUrl")
    public String getBzlPhotoUrl(){
        return this.bzlPhotoUrl;
    }
    public void setBzlPhotoUrl(String bzlPhotoUrl){
        this.bzlPhotoUrl = bzlPhotoUrl;
    }
    @Column(name = "cardPhotoUrl")
    public String getCardPhotoUrl(){
        return this.cardPhotoUrl;
    }
    public void setCardPhotoUrl(String cardPhotoUrl){
        this.cardPhotoUrl = cardPhotoUrl;
    }
    @Column(name = "icon")
    public String getIcon(){
        return this.icon;
    }
    public void setIcon(String icon){
        this.icon = icon;
    }
    @Column(name = "status")
    public String getStatus(){
        return this.status;
    }
    public void setStatus(String status){
        this.status = status;
    }
    @Column(name = "commitTime")
    public Date getCommitTime(){
        return this.commitTime;
    }
    public void setCommitTime(Date commitTime){
        this.commitTime = commitTime;
    }
    @Column(name = "createUserId")
    public String getCreateUserId(){
        return this.createUserId;
    }
    public void setCreateUserId(String createUserId){
        this.createUserId = createUserId;
    }
    @Column(name = "createTime")
    public Date getCreateTime(){
        return this.createTime;
    }
    public void setCreateTime(Date createTime){
        this.createTime = createTime;
    }
    @Column(name = "updateUserId")
    public String getUpdateUserId(){
        return this.updateUserId;
    }
    public void setUpdateUserId(String updateUserId){
        this.updateUserId = updateUserId;
    }
    @Column(name = "updateTime")
    public Date getUpdateTime(){
        return this.updateTime;
    }
    public void setUpdateTime(Date updateTime){
        this.updateTime = updateTime;
    }
    @Column(name = "optionUser")
    public String getOptionUser(){
        return this.optionUser;
    }
    public void setOptionUser(String optionUser){
        this.optionUser = optionUser;
    }
}
