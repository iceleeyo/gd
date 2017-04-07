package com.gudeng.commerce.info.customer.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import com.gudeng.commerce.info.customer.dao.BaseDao;
import com.gudeng.commerce.info.customer.dto.OrderBillDTO;
import com.gudeng.commerce.info.customer.service.OrderBillService;
import com.gudeng.framework.dba.util.DalUtils;

/**
 * @Description 交易账单服务
 * @Project gd-order-intf
 * @ClassName OrderBillService.java
 * @Author lidong(dli@gdeng.cn)
 * @CreationDate 2015年12月14日 上午11:59:22
 * @Version V2.0
 * @Copyright 谷登科技 2015-2015
 * @ModificationHistory
 */
public class OrderBillServiceImpl implements OrderBillService {
	@Autowired
	private BaseDao<OrderBillDTO> baseDao;

	/**
	 * @Description AddBillDTO 交易账单添加
	 * @param dto
	 *            交易账单实体
	 * @return
	 * @throws Exception
	 * @CreationDate 2015年12月14日 下午12:03:17
	 * @Author lidong(dli@gdeng.cn)
	 */
	public int addBillDTO(OrderBillDTO dto) throws Exception {
		return (int) baseDao.execute("OrderBill.addDTO", dto);
	}

	/**
	 * @Description 根据流水号（系统参考号）查找交易账单
	 * @param sysRefeNo
	 * @return
	 * @throws Exception
	 * @CreationDate 2015年12月23日 上午9:51:49
	 * @Author lidong(dli@gdeng.cn)
	 */
	public OrderBillDTO getOrderBillBySysRefeNo(String sysRefeNo) throws Exception {
		if (StringUtils.isEmpty(sysRefeNo)) {
			return null;
		}
		Map<String, Object> map = new HashMap<>();
		map.put("sysRefeNo", sysRefeNo.trim());
		return (OrderBillDTO) this.baseDao.queryForObject("OrderBill.getOrderBillBySysRefeNo", map, OrderBillDTO.class);
	}

	/**
	 * @Description 根据条件查找交易账单列表
	 * @param map
	 * @return
	 * @throws Exception
	 * @CreationDate 2015年12月23日 上午9:57:03
	 * @Author lidong(dli@gdeng.cn)
	 */
	public List<OrderBillDTO> getOrderBillByCondition(Map<String, Object> map) throws Exception{
		List<OrderBillDTO> list=new ArrayList<>();
		list = baseDao.queryForList("OrderBill.getOrderBillByCondition", map, OrderBillDTO.class);
		return list;
	}
	
	
	/**
	 * @Description batchAddDTO 交易账单批量添加
	 * @param list
	 *            交易账单实体集合
	 * @return
	 * @throws Exception
	 * @CreationDate 2015年12月14日 下午12:03:39
	 * @Author lidong(dli@gdeng.cn)
	 */
	@SuppressWarnings("unchecked")
	public int batchAddDTO(List<OrderBillDTO> list) throws Exception {
		int len = list.size();
		Map<String, Object>[] batchValues = new HashMap[len];
		for (int i = 0; i < len; i++) {
			OrderBillDTO orderBillDTO = list.get(i);
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("businessNo", orderBillDTO.getBusinessNo());
			map.put("businessName", orderBillDTO.getBusinessName());
			map.put("tradeType", orderBillDTO.getTradeType());
			map.put("tradeDayStr", orderBillDTO.getTradeDayStr());
			map.put("cardNo", orderBillDTO.getCardNo());
			map.put("clientNo", orderBillDTO.getClientNo());
			map.put("tradeMoney", orderBillDTO.getTradeMoney());
			map.put("sysRefeNo", orderBillDTO.getSysRefeNo());
			map.put("fee", orderBillDTO.getFee());
			map.put("createUserId", orderBillDTO.getCreateUserId());
			map.put("createTimeStr", orderBillDTO.getCreateTimeStr());
			map.put("updateUserId", orderBillDTO.getUpdateUserId());
			map.put("updateTimeStr", orderBillDTO.getUpdateTimeStr());
			batchValues[i] = map;
		}
		return baseDao.batchUpdate("OrderBill.addDTO", batchValues).length;
	}

	@Override
	public List<OrderBillDTO> queryOrderBill(OrderBillDTO queryOrderBill) throws Exception {
		Map<String, Object> map = DalUtils.convertToMap(queryOrderBill);
		if (CollectionUtils.isNotEmpty(queryOrderBill.getSysRefeNos())) {
			map.put("sysRefeNos", queryOrderBill.getSysRefeNos());
		}
		return baseDao.queryForList("OrderBill.queryOrderBill", map, OrderBillDTO.class);
	}

	@Override
	public int updateOrderBill(OrderBillDTO orderBill) throws Exception {
		Map<String, Object> map = DalUtils.convertToMap(orderBill);
		if (CollectionUtils.isNotEmpty(orderBill.getSysRefeNos())) {
			map.put("sysRefeNos", orderBill.getSysRefeNos());
		}
		return baseDao.execute("OrderBill.updateOrderBill", map);
	}

	@Override
	public Long getOrderBillTotal(Map<String, Object> map) throws Exception {
		// TODO Auto-generated method stub
		return baseDao.queryForObject("OrderBill.getOrderBillTotal", map, Long.class);
	}

	@Override
	public Double getTradeMoneySum(Map<String, Object> map) throws Exception {
		// TODO Auto-generated method stub
		return baseDao.queryForObject("OrderBill.getTradeMoneySum", map, Double.class);
	}

}
