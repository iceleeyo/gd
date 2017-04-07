package com.gudeng.commerce.gd.bi.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "grd_pro_perten")
public class GrdProPertenEntity  implements java.io.Serializable{
    /**
    *主键，自增
    */
    private Integer id;

    *农速通业务类型。5表示发布货源，6表示货运订单,7表示信息订单',
    */
    private Integer type;

    *由年+月+ x组合产生，如2016071 表示2016年7月上旬
    */
    private Integer code;

    *是否已经发放礼品,0未发放，1已经发放
    */
    private Integer status;

    *用户id，取member_baseinfo表的id
    */
    private Integer memberId;

    *手机号
    */
    private String mobile;

    *姓名
    */
    private String realname;

    *数量
    */
    private Integer count;

    @Column(name = "id")
    public Integer getId(){

    }
    public void setId(Integer id){

    }
    @Column(name = "type")
    public Integer getType(){

    }
    public void setType(Integer type){

    }
    @Column(name = "code")
    public Integer getCode(){

    }
    public void setCode(Integer code){

    }
    @Column(name = "status")
    public Integer getStatus(){

    }
    public void setStatus(Integer status){

    }
    @Column(name = "memberId")
    public Integer getMemberId(){

    }
    public void setMemberId(Integer memberId){

    }
    @Column(name = "mobile")
    public String getMobile(){

    }
    public void setMobile(String mobile){

    }
    @Column(name = "realname")
    public String getRealname(){

    }
    public void setRealname(String realname){

    }
    @Column(name = "count")
    public Integer getCount(){

    }
    public void setCount(Integer count){

    }
}