package com.gudeng.commerce.gd.bi.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "grd_pro_info_order")
public class GrdProInfoOrderEntity  implements java.io.Serializable{
	
   /**
	* 
    */
	private static final long serialVersionUID = 6624758126802012574L;
    /**
    *
    */
    private Long id;

    *
    */
    private Long marketId;

    *
    */
    private String marketName;

    *团队id
    */
    private Integer teamId;

    *团队名称
    */
    private String teamName;

    *地推人员信息Id
    */
    private Integer grdId;

    *地推姓名
    */
    private String grdUserName;

    *地推人员手机号
    */
    private String grdMobile;

    *物流订单号
    */
    private String logistOrderNo;

    *物流公司名称
    */
    private String logistCompanyName;

    *司机姓名
    */
    private String driverName;

    *司机接单时间
    */
    private Date recieveTime;

    *物流公司确认时间
    */
    private Date confirmTime;

    *订单状态
    */
    private String orderStatus;

    *支付状态
    */
    private String payStatus;

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
    
    private Date generateTime;

    @Column(name = "id")
    public Long getId(){

    }
    public void setId(Long id){

    }
    @Column(name = "marketId")
    public Long getMarketId(){

    }
    public void setMarketId(Long marketId){

    }
    @Column(name = "marketName")
    public String getMarketName(){

    }
    public void setMarketName(String marketName){

    }
    @Column(name = "teamId")
    public Integer getTeamId(){

    }
    public void setTeamId(Integer teamId){

    }
    @Column(name = "teamName")
    public String getTeamName(){

    }
    public void setTeamName(String teamName){

    }
    @Column(name = "grdId")
    public Integer getGrdId(){

    }
    public void setGrdId(Integer grdId){

    }
    @Column(name = "grdUserName")
    public String getGrdUserName(){

    }
    public void setGrdUserName(String grdUserName){

    }
    @Column(name = "grdMobile")
    public String getGrdMobile(){

    }
    public void setGrdMobile(String grdMobile){

    }
    @Column(name = "logistOrderNo")
    public String getLogistOrderNo(){

    }
    public void setLogistOrderNo(String logistOrderNo){

    }
    @Column(name = "logistCompanyName")
    public String getLogistCompanyName(){

    }
    public void setLogistCompanyName(String logistCompanyName){

    }
    @Column(name = "driverName")
    public String getDriverName(){

    }
    public void setDriverName(String driverName){

    }
    @Column(name = "recieveTime")
    public Date getRecieveTime(){

    }
    public void setRecieveTime(Date recieveTime){

    }
    @Column(name = "confirmTime")
    public Date getConfirmTime(){

    }
    public void setConfirmTime(Date confirmTime){

    }
    @Column(name = "orderStatus")
    public String getOrderStatus(){

    }
    public void setOrderStatus(String orderStatus){

    }
    @Column(name = "payStatus")
    public String getPayStatus(){

    }
    public void setPayStatus(String payStatus){

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
    @Column(name = "generateTime")
    public Date getGenerateTime(){

        return this.generateTime;
    }
    public void setGenerateTime(Date generateTime){

        this.generateTime = generateTime;
    }
    
}