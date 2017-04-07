package com.gudeng.commerce.gd.order.service;

import java.util.List;
import java.util.Map;

import com.gudeng.commerce.gd.order.dto.PreSaleDTO;
import com.gudeng.commerce.gd.order.entity.PreSaleEntity;

public interface PreSaleService {
	/**
	 * 添加
	 * 
	 * @param PreSaleEntity
	 *            obj
	 * @return Long 添加成功后id
	 * 
	 */
	public Long insertEntity(PreSaleEntity obj) throws Exception;

	/**
	 * 通过ID删除对象
	 * 
	 * @param id
	 * @return void
	 * 
	 */
	public int deleteById(Long id) throws Exception;

	/**
	 * 批量通过ID删除对象
	 * 
	 * @param idList
	 * @return void
	 * 
	 */
	public int batchDeleteById(List<Long> idList) throws Exception;
	
	/**
	 * 通过对象更新数据库
	 * 
	 * @param PreSaleDTO
	 * @return int
	 * 
	 */
	public int updateDTO(PreSaleDTO obj) throws Exception;
	
	/**
	 * 批量通过对象更新数据库
	 * 
	 * @param PreSaleDTO
	 * @return int
	 * 
	 */
	public int batchUpdateDTO(List<PreSaleDTO> objList) throws Exception;
	
	/**
	 * 查询记录数
	 * 
	 * @param map
	 * @return 记录数
	 * 
	 */
	public int getTotal(Map<String, Object> map) throws Exception;

	/**
	 * 根据ID查询对象
	 * 
	 * @param id
	 * @return PreSaleDTO
	 * 
	 */
	public PreSaleDTO getById(Long id) throws Exception;

	/**
	 * 根据条件查询list(分页查询)
	 * 
	 * @param map
	 * @return List<PreSaleDTO>
	 */
	public List<PreSaleDTO> getListByConditionPage(Map<String, Object> map) throws Exception;
	

	/**
	 * 根据条件查询list
	 * 
	 * @param map
	 * @return List<PreSaleDTO>
	 */
	public List<PreSaleDTO> getListByCondition(Map<String, Object> map) throws Exception;

	/**
	 * 根据订单号修改状态
	 * @param dto
	 * @return
	 * @throws Exception
	 */
	public Integer updateStatusByOrderNo(PreSaleDTO dto) throws Exception;

	/**
	 * 插入预售记录
	 * @param totalMap
	 * @return
	 * @throws Exception
	 */
	public boolean addPreSale(Map<String, Object> totalMap) throws Exception;
	
	/**
	 * 根据订单号， 二维码查找
	 * @param orderNo
	 * @param qcCode
	 * @return
	 * @throws Exception
	 */
	public PreSaleDTO getByOrderNo(Long orderNo, String qcCode) throws Exception;

	/**
	 * 确认订单
	 * @param totalMap
	 * @return
	 * @throws Exception
	 */
	public boolean confirm(Map<String, Object> totalMap) throws Exception;
	
	/**
	 * 查询预售表创建时间超过48小时的，且在订单表中没有记录
	 * @param map
	 * @return
	 * @throws Exception
	 */
	public List<PreSaleDTO> getOverPreSale(Map<String, Object> map) throws Exception;
		
}
